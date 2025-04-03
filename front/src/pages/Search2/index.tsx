import React, { useEffect, useState, useRef, useCallback } from "react";
import { ModuleRegistry, ClientSideRowModelModule, AllCommunityModule, themeQuartz, CsvExportModule } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { motion } from 'framer-motion';
import { Container, Title } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageRenderer from './ImageRenderer.jsx';
import { Button } from "../Contact/styles.js";
import Loading from '../../components/loading';

ModuleRegistry.registerModules([AllCommunityModule, CsvExportModule]);

interface IRow {
  articleChemblId: string;
  smiles: string;
  compoundName: string;
  molecularWeight: number;
  molecularFormula: string;
  alogp: number;
  standardType: string;
  standardRelation: string;
  standardValue: number;
  standardUnits: string;
  comment: string;
  mutagenicityAmesTestConsensusAssessment: string;
  mutagenicityAmesTestConsensusPrediction: string;
  mutagenicityAmesTestCaesarAssessment: string;
  mutagenicityAmesTestCaesarPrediction: string;
  mutagenicityAmesTestIssAssessment: string;
  mutagenicityAmesTestIssPrediction: string;
  mutagenicityAmesTestSarpyIrfmnAssessment: string;
  mutagenicityAmesTestSarpyIrfmnPrediction: string;
  mutagenicityAmesTestKnnReadAcrossAssessment: string;
  mutagenicityAmesTestKnnReadAcrossPrediction: string;
  mutagenicityAmesTestAromaticAminesConcertIrfmnAssessment: string;
  mutagenicityAmesTestAromaticAminesConcertIrfmnPrediction: string;
  developmentalToxicityCaesarAssessment: string;
  developmentalToxicityCaesarPrediction: string;
  developmentalReproductiveToxicityPgAssessment: string;
  developmentalReproductiveToxicityPgPrediction: string;
  carcinogenicityCaesarAssessment: string;
  carcinogenicityCaesarPrediction: string;
  carcinogenicityIssAssessment: string;
  carcinogenicityIssPrediction: string;
  carcinogenicityIrfmnIsscanCgxAssessment: string;
  carcinogenicityIrfmnIsscanCgxPrediction: string;
  carcinogenicityIrfmnAntaresAssessment: string;
  carcinogenicityIrfmnAntaresPrediction: string;
  carcinogenicityOralClassificationIrfmnAssessment: string;
  carcinogenicityOralClassificationIrfmnPrediction: string;
  carcinogenicityOralSlopeFactorIrfmnAssessment: string;
  carcinogenicityOralSlopeFactorIrfmnPrediction: number;
  carcinogenicityInhalationClassificationIrfmnAssessment: string;
  carcinogenicityInhalationClassificationIrfmnPrediction: string;
  carcinogenicityInhalationSlopeFactorIrfmnAssessment: string;
  carcinogenicityInhalationSlopeFactorIrfmnPrediction: number;
  carcinogenicityMaleRatCoralAssessment: string;
  carcinogenicityMaleRatCoralPrediction: string;
  carcinogenicityFemaleRatCoralAssessment: string;
  carcinogenicityFemaleRatCoralPrediction: string;
  acuteToxicityLd50KnnAssessment: string;
  acuteToxicityLd50KnnPrediction: string;
  hepatotoxicityIrfmnAssessment: string;
  hepatotoxicityIrfmnPrediction: string;
  logpMeylanKowwinAssessment: string;
  logpMeylanKowwinPrediction: number;
  logpMlogpAssessment: string;
  logpMlogpPrediction: number;
  logpAlogpAssessment: string;
  logpAlogpPrediction: number;
}

const themes = [
  { id: "themeQuartz", theme: themeQuartz },
];

const Search = () => {
  const PAGE_SIZE = 1000; // Must match backend
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState(themes[0]);
  const [totalRecords, setTotalRecords] = useState(-1); // -1 = unknown
  const [hasMore, setHasMore] = useState(true);
  const fetchDataRef = useRef<() => void>();
  const gridRef = useRef<AgGridReact>(null);

  const fetchData = async () => {
    if (!hasMore || loading) return;

    try {
      setLoading(true);
      console.log("Fetching data for page:", page);

      const response = await fetch(
        `http://localhost:3001/molecules2?offset=${page * PAGE_SIZE}`,
        { signal: AbortSignal.timeout(5000) } // Add timeout
      );

      // Handle missing header
      const totalHeader = response.headers.get('X-Total-Count');
      if (totalHeader) {
        const total = parseInt(totalHeader);
        if (totalRecords === -1) setTotalRecords(total);
        setHasMore(page * PAGE_SIZE < total);
      }

      const data = await response.json();
      setRowData(prev => [...prev, ...data]);

      // Set initialLoading to false after the first fetch
      if (page === 0) {
        setInitialLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false); // Stop loading on error
    } finally {
      setLoading(false);
      setPage(prev => prev + 1); // Increment page after fetch
    }
  };

  fetchDataRef.current = fetchData;

  // Fetch data on page change
  useEffect(() => {
    fetchDataRef.current();
  }, [page]);

  // Handle grid scroll
  const handleScroll = (e: { api: any }) => {
    if (!hasMore || loading) return;

    const gridApi = e.api;
    const rowIndex = gridApi.getLastDisplayedRow();

    // Load next page when 80% scrolled
    if (rowIndex >= rowData.length * 0.8) {
      setPage(prev => prev + 1);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setRowData([]);
      setPage(0);
      setHasMore(true);
    };
  }, []);

  const [colDefs] = useState([
    { field: 'articleChemblId', headerName: 'Article ChEMBL ID' },
    { field: 'molecularStructure', headerName: 'Molecular Structure', cellRenderer: ImageRenderer, cellClass: 'structure-cell', autoWidth: true, autoHeight: true },
    { field: 'smiles', headerName: 'SMILES', filter: true },
    { field: 'compoundName', headerName: 'Compound Name' },
    { field: 'molecularWeight', headerName: 'Molecular Weight', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'molecularFormula', headerName: 'Molecular Formula' },
    { field: 'alogp', headerName: 'ALogP', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'standardType', headerName: 'Standard Type' },
    { field: 'standardRelation', headerName: 'Standard Relation' },
    { field: 'standardValue', headerName: 'Standard Value', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'standardUnits', headerName: 'Standard Units' },
    { field: 'comment', headerName: 'Comment' },
    { field: 'mutagenicityConsensusAssessment', headerName: 'Mutagenicity Consensus Assessment' },
    { field: 'mutagenicityConsensusPrediction', headerName: 'Mutagenicity Consensus Prediction' },
    { field: 'mutagenicityCaesarAssessment', headerName: 'Mutagenicity Caesar Assessment' },
    { field: 'mutagenicityCaesarPrediction', headerName: 'Mutagenicity Caesar Prediction' },
    { field: 'mutagenicityIssAssessment', headerName: 'Mutagenicity ISS Assessment' },
    { field: 'mutagenicityIssPrediction', headerName: 'Mutagenicity ISS Prediction' },
    { field: 'mutagenicitySarpyIrfmnAssessment', headerName: 'Mutagenicity Sarpy IRFMN Assessment' },
    { field: 'mutagenicitySarpyIrfmnPrediction', headerName: 'Mutagenicity Sarpy IRFMN Prediction' },
    { field: 'mutagenicityKnnReadAcrossAssessment', headerName: 'Mutagenicity KNN Read Across Assessment' },
    { field: 'mutagenicityKnnReadAcrossPrediction', headerName: 'Mutagenicity KNN Read Across Prediction' },
    { field: 'mutagenicityAromaticAminesAssessment', headerName: 'Mutagenicity Aromatic Amines Assessment' },
    { field: 'mutagenicityAromaticAminesPrediction', headerName: 'Mutagenicity Aromatic Amines Prediction' },
    { field: 'developmentalToxicityAssessment', headerName: 'Developmental Toxicity Assessment' },
    { field: 'developmentalToxicityPrediction', headerName: 'Developmental Toxicity Prediction' },
    { field: 'developmentalReproductiveToxicityAssessment', headerName: 'Developmental Reproductive Toxicity Assessment' },
    { field: 'developmentalReproductiveToxicityPrediction', headerName: 'Developmental Reproductive Toxicity Prediction' },
    { field: 'carcinogenicityCaesarAssessment', headerName: 'Carcinogenicity Caesar Assessment' },
    { field: 'carcinogenicityCaesarPrediction', headerName: 'Carcinogenicity Caesar Prediction' },
    { field: 'carcinogenicityIssAssessment', headerName: 'Carcinogenicity ISS Assessment' },
    { field: 'carcinogenicityIssPrediction', headerName: 'Carcinogenicity ISS Prediction' },
    { field: 'carcinogenicityIsscanCgxAssessment', headerName: 'Carcinogenicity ISSCAN CGX Assessment' },
    { field: 'carcinogenicityIsscanCgxPrediction', headerName: 'Carcinogenicity ISSCAN CGX Prediction' },
    { field: 'carcinogenicityAntaresAssessment', headerName: 'Carcinogenicity Antares Assessment' },
    { field: 'carcinogenicityAntaresPrediction', headerName: 'Carcinogenicity Antares Prediction' },
    { field: 'carcinogenicityOralClassificationAssessment', headerName: 'Carcinogenicity Oral Classification Assessment' },
    { field: 'carcinogenicityOralClassificationPrediction', headerName: 'Carcinogenicity Oral Classification Prediction' },
    { field: 'carcinogenicityOralSlopeFactorAssessment', headerName: 'Carcinogenicity Oral Slope Factor Assessment' },
    { field: 'carcinogenicityOralSlopeFactorPrediction', headerName: 'Carcinogenicity Oral Slope Factor Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityInhalationClassificationAssessment', headerName: 'Carcinogenicity Inhalation Classification Assessment' },
    { field: 'carcinogenicityInhalationClassificationPrediction', headerName: 'Carcinogenicity Inhalation Classification Prediction' },
    { field: 'carcinogenicityInhalationSlopeFactorAssessment', headerName: 'Carcinogenicity Inhalation Slope Factor Assessment' },
    { field: 'carcinogenicityInhalationSlopeFactorPrediction', headerName: 'Carcinogenicity Inhalation Slope Factor Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityMaleRatAssessment', headerName: 'Carcinogenicity Male Rat Assessment' },
    { field: 'carcinogenicityMaleRatPrediction', headerName: 'Carcinogenicity Male Rat Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityFemaleRatAssessment', headerName: 'Carcinogenicity Female Rat Assessment' },
    { field: 'carcinogenicityFemaleRatPrediction', headerName: 'Carcinogenicity Female Rat Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'acuteToxicityAssessment', headerName: 'Acute Toxicity Assessment' },
    { field: 'acuteToxicityPrediction', headerName: 'Acute Toxicity Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'hepatotoxicityAssessment', headerName: 'Hepatotoxicity Assessment' },
    { field: 'hepatotoxicityPrediction', headerName: 'Hepatotoxicity Prediction' },
    { field: 'logpMeylanKowwinAssessment', headerName: 'LogP Meylan Kowwin Assessment' },
    { field: 'logpMeylanKowwinPrediction', headerName: 'LogP Meylan Kowwin Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'logpMlogpAssessment', headerName: 'LogP MLOGP Assessment' },
    { field: 'logpMlogpPrediction', headerName: 'LogP MLOGP Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'logpAlogpAssessment', headerName: 'LogP ALOGP Assessment' },
    { field: 'logpAlogpPrediction', headerName: 'LogP ALOGP Prediction', type: 'numericColumn', filter: 'agNumberColumnFilter' },
  ]);

  // Default column settings
  const defaultColDef = {
    filter: true,
    sortable: true,
    resizable: true,
  };

  // AG Grid theme
  const myTheme = themeQuartz.withParams({
    browserColorScheme: "light",
    headerFontSize: 14
  });

  const getParams = () => {
    return {
      skipPinnedTop: true,    // Whether to skip pinned top rows
      skipPinnedBottom: true, // Whether to skip pinned bottom rows
      columnSeparator: ',',   // You can change this if needed
      onlySelected: false,    // Whether to export only selected rows
      fileName: 'trypanosomaCruzi_data.csv' // Custom filename
    };
  };

  const onBtnExport = useCallback(() => {
    if (gridRef.current && gridRef.current.api) {
      const params = getParams();
      gridRef.current.api.exportDataAsCsv(params);
    } else {
      console.error('Grid API is not available');
    }
  }, []);

  return (
    <>
      <Header />
      <Container
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title
          as={motion.h1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tabela Trypanosoma Cruzi
        </Title>

        <div style={{ margin: "2rem" }}>
          <Button onClick={onBtnExport}>Download Grid</Button>
        </div>

        {initialLoading || loading ? (
          <div style={{ height: '30rem', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: "rgba(238, 238, 238, 0.11)"}}>
            <Loading />
          </div>
        ) : (
          <div style={{height: '600px', width: '100%' }} className={theme.id}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
              onBodyScroll={handleScroll}
              pagination={true}
              modules={[ClientSideRowModelModule, CsvExportModule]}
            />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Search;
