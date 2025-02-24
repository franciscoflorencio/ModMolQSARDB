import React, { useEffect, useState } from "react";
import { ModuleRegistry, ClientSideRowModelModule, AllCommunityModule, themeQuartz } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { motion } from 'framer-motion';
import { Container, Title } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageRenderer from './ImageRenderer.jsx';

ModuleRegistry.registerModules([AllCommunityModule]);

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
  organism: string;
}  

const themes = [
  { id: "themeQuartz", theme: themeQuartz },

];

const Search = () => {
  const PAGE_SIZE = 1000; // Must match backend
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState(themes[0]);
  const [totalRecords, setTotalRecords] = useState(-1); // -1 = unknown
  const [hasMore, setHasMore] = useState(true);

  // Fetch data function
  const fetchData = async () => {
    if (!hasMore || loading) return;

    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/molecules?offset=${page * PAGE_SIZE}`,
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
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false); // Stop loading on error
    } finally {
      setLoading(false);
      setPage(prev => prev + 1); // Increment page after fetch
    }
  };

  // Fetch data on page change
  useEffect(() => {
    fetchData();
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
    {field: 'molecularStructure', headerName: 'Molecular Structure', cellRenderer: ImageRenderer, cellClass: 'structure-cell', maxWidth: 120, autoHeight: true},
    { field: 'smiles', headerName: 'SMILES', filter: true },
    { field: 'compoundName', headerName: 'Compound Name' },
    { field: 'molecularWeight', headerName: 'Molecular Weight' },
    { field: 'molecularFormula', headerName: 'Molecular Formula' },
    { field: 'alogp', headerName: 'ALogP' },
    { field: 'standardType', headerName: 'Standard Type' },
    { field: 'standardRelation', headerName: 'Standard Relation' },
    { field: 'standardValue', headerName: 'Standard Value' },
    { field: 'standardUnits', headerName: 'Standard Units' },
    { field: 'comment', headerName: 'Comment' },
    { field: 'mutagenicityAmesTestConsensusAssessment', headerName: 'Mutagenicity Consensus Assessment' },
    { field: 'mutagenicityAmesTestConsensusPrediction', headerName: 'Mutagenicity Consensus Prediction' },
    { field: 'mutagenicityAmesTestCaesarAssessment', headerName: 'Mutagenicity Caesar Assessment' },
    { field: 'mutagenicityAmesTestCaesarPrediction', headerName: 'Mutagenicity Caesar Prediction' },
    { field: 'mutagenicityAmesTestIssAssessment', headerName: 'Mutagenicity ISS Assessment' },
    { field: 'mutagenicityAmesTestIssPrediction', headerName: 'Mutagenicity ISS Prediction' },
    { field: 'mutagenicityAmesTestSarpyIrfmnAssessment', headerName: 'Mutagenicity Sarpy IRFMN Assessment' },
    { field: 'mutagenicityAmesTestSarpyIrfmnPrediction', headerName: 'Mutagenicity Sarpy IRFMN Prediction' },
    { field: 'mutagenicityAmesTestKnnReadAcrossAssessment', headerName: 'Mutagenicity KNN Read Across Assessment' },
    { field: 'mutagenicityAmesTestKnnReadAcrossPrediction', headerName: 'Mutagenicity KNN Read Across Prediction' },
    { field: 'mutagenicityAmesTestAromaticAminesConcertIrfmnAssessment', headerName: 'Mutagenicity Aromatic Amines Assessment' },
    { field: 'mutagenicityAmesTestAromaticAminesConcertIrfmnPrediction', headerName: 'Mutagenicity Aromatic Amines Prediction' },
    { field: 'developmentalToxicityCaesarAssessment', headerName: 'Developmental Toxicity Caesar Assessment' },
    { field: 'developmentalToxicityCaesarPrediction', headerName: 'Developmental Toxicity Caesar Prediction' },
    { field: 'developmentalReproductiveToxicityPgAssessment', headerName: 'Developmental Reproductive Toxicity PG Assessment' },
    { field: 'developmentalReproductiveToxicityPgPrediction', headerName: 'Developmental Reproductive Toxicity PG Prediction' },
    { field: 'carcinogenicityCaesarAssessment', headerName: 'Carcinogenicity Caesar Assessment' },
    { field: 'carcinogenicityCaesarPrediction', headerName: 'Carcinogenicity Caesar Prediction' },
    { field: 'carcinogenicityIssAssessment', headerName: 'Carcinogenicity ISS Assessment' },
    { field: 'carcinogenicityIssPrediction', headerName: 'Carcinogenicity ISS Prediction' },
    { field: 'carcinogenicityIrfmnIsscanCgxAssessment', headerName: 'Carcinogenicity IRFMN ISSCAN CGX Assessment' },
    { field: 'carcinogenicityIrfmnIsscanCgxPrediction', headerName: 'Carcinogenicity IRFMN ISSCAN CGX Prediction' },
    { field: 'carcinogenicityIrfmnAntaresAssessment', headerName: 'Carcinogenicity IRFMN Antares Assessment' },
    { field: 'carcinogenicityIrfmnAntaresPrediction', headerName: 'Carcinogenicity IRFMN Antares Prediction' },
    { field: 'carcinogenicityOralClassificationIrfmnAssessment', headerName: 'Carcinogenicity Oral Classification Assessment' },
    { field: 'carcinogenicityOralClassificationIrfmnPrediction', headerName: 'Carcinogenicity Oral Classification Prediction' },
    { field: 'carcinogenicityOralSlopeFactorIrfmnAssessment', headerName: 'Carcinogenicity Oral Slope Factor Assessment' },
    { field: 'carcinogenicityOralSlopeFactorIrfmnPrediction', headerName: 'Carcinogenicity Oral Slope Factor Prediction' },
    { field: 'carcinogenicityInhalationClassificationIrfmnAssessment', headerName: 'Carcinogenicity Inhalation Classification Assessment' },
    { field: 'carcinogenicityInhalationClassificationIrfmnPrediction', headerName: 'Carcinogenicity Inhalation Classification Prediction' },
    { field: 'carcinogenicityInhalationSlopeFactorIrfmnAssessment', headerName: 'Carcinogenicity Inhalation Slope Factor Assessment' },
    { field: 'carcinogenicityInhalationSlopeFactorIrfmnPrediction', headerName: 'Carcinogenicity Inhalation Slope Factor Prediction' },
    { field: 'carcinogenicityMaleRatCoralAssessment', headerName: 'Carcinogenicity Male Rat Coral Assessment' },
    { field: 'carcinogenicityMaleRatCoralPrediction', headerName: 'Carcinogenicity Male Rat Coral Prediction' },
    { field: 'carcinogenicityFemaleRatCoralAssessment', headerName: 'Carcinogenicity Female Rat Coral Assessment' },
    { field: 'carcinogenicityFemaleRatCoralPrediction', headerName: 'Carcinogenicity Female Rat Coral Prediction' },
    { field: 'acuteToxicityLd50KnnAssessment', headerName: 'Acute Toxicity LD50 KNN Assessment' },
    { field: 'acuteToxicityLd50KnnPrediction', headerName: 'Acute Toxicity LD50 KNN Prediction' },
    { field: 'hepatotoxicityIrfmnAssessment', headerName: 'Hepatotoxicity IRFMN Assessment' },
    { field: 'hepatotoxicityIrfmnPrediction', headerName: 'Hepatotoxicity IRFMN Prediction' },
    { field: 'logpMeylanKowwinAssessment', headerName: 'LogP Meylan Kowwin Assessment' },
    { field: 'logpMeylanKowwinPrediction', headerName: 'LogP Meylan Kowwin Prediction' },
    { field: 'logpMlogpAssessment', headerName: 'LogP MLOGP Assessment' },
    { field: 'logpMlogpPrediction', headerName: 'LogP MLOGP Prediction' },
    { field: 'logpAlogpAssessment', headerName: 'LogP ALOGP Assessment' },
    { field: 'logpAlogpPrediction', headerName: 'LogP ALOGP Prediction' },
    { field: 'organism', headerName: 'Organism' },
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
          Página de Busca
        </Title>

        <div style={{ height: '100%', width: '100%' }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            myTheme={myTheme}
            onBodyScroll={handleScroll}
            loadingOverlayComponent={
              () => <div>Loading more records...</div>
            }
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Search;