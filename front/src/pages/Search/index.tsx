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
  organism: string;
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
    { field: 'articleChemblId', headerName: 'ID ChEMBL do Artigo' },
    { field: 'molecularStructure', headerName: 'Estrutura Molecular', cellRenderer: ImageRenderer, cellClass: 'structure-cell', autoWidth: true, autoHeight: true },
    { field: 'smiles', headerName: 'SMILES', filter: true },
    { field: 'compoundName', headerName: 'Nome do Composto' },
    { field: 'molecularWeight', headerName: 'Peso Molecular', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'molecularFormula', headerName: 'Fórmula Molecular' },
    { field: 'alogp', headerName: 'ALogP', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'standardType', headerName: 'Tipo Padrão' },
    { field: 'standardRelation', headerName: 'Relação Padrão' },
    { field: 'standardValue', headerName: 'Valor Padrão', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'standardUnits', headerName: 'Unidades Padrão' },
    { field: 'comment', headerName: 'Comentário' },
    { field: 'mutagenicityConsensusAssessment', headerName: 'Avaliação de Mutagenicidade (CAESAR)' },
    { field: 'mutagenicityConsensusPrediction', headerName: 'Predição de Mutagenicidade (CAESAR)' },
    { field: 'mutagenicityCaesarAssessment', headerName: 'Avaliação de Mutagenicidade (CAESAR)' },
    { field: 'mutagenicityCaesarPrediction', headerName: 'Predição de Mutagenicidade (CAESAR)' },
    { field: 'mutagenicityIssAssessment', headerName: 'Avaliação de Mutagenicidade (ISS)' },
    { field: 'mutagenicityIssPrediction', headerName: 'Predição de Mutagenicidade (ISS)' },
    { field: 'mutagenicitySarpyIrfmnAssessment', headerName: 'Avaliação de Mutagenicidade (SARPY-IRFMN)' },
    { field: 'mutagenicitySarpyIrfmnPrediction', headerName: 'Predição de Mutagenicidade (SARPY-IRFMN)' },
    { field: 'mutagenicityKnnReadAcrossAssessment', headerName: 'Avaliação de Mutagenicidade (KNN Read Across)' },
    { field: 'mutagenicityKnnReadAcrossPrediction', headerName: 'Predição de Mutagenicidade (KNN Read Across)' },
    { field: 'mutagenicityAromaticAminesAssessment', headerName: 'Avaliação de Mutagenicidade (Aminas Aromáticas)' },
    { field: 'mutagenicityAromaticAminesPrediction', headerName: 'Predição de Mutagenicidade (Aminas Aromáticas)' },
    { field: 'developmentalToxicityAssessment', headerName: 'Avaliação de Toxicidade no Desenvolvimento' },
    { field: 'developmentalToxicityPrediction', headerName: 'Predição de Toxicidade no Desenvolvimento' },
    { field: 'developmentalReproductiveToxicityAssessment', headerName: 'Avaliação de Toxicidade Reprodutiva/Desenvolvimento' },
    { field: 'developmentalReproductiveToxicityPrediction', headerName: 'Predição de Toxicidade Reprodutiva/Desenvolvimento' },
    { field: 'carcinogenicityCaesarAssessment', headerName: 'Avaliação de Carcinogenicidade (CAESAR)' },
    { field: 'carcinogenicityCaesarPrediction', headerName: 'Predição de Carcinogenicidade (CAESAR)' },
    { field: 'carcinogenicityIssAssessment', headerName: 'Avaliação de Carcinogenicidade (ISS)' },
    { field: 'carcinogenicityIssPrediction', headerName: 'Predição de Carcinogenicidade (ISS)' },
    { field: 'carcinogenicityIsscanCgxAssessment', headerName: 'Avaliação de Carcinogenicidade (ISSCAN-CGX)' },
    { field: 'carcinogenicityIsscanCgxPrediction', headerName: 'Predição de Carcinogenicidade (ISSCAN-CGX)' },
    { field: 'carcinogenicityAntaresAssessment', headerName: 'Avaliação de Carcinogenicidade (ANTARES)' },
    { field: 'carcinogenicityAntaresPrediction', headerName: 'Predição de Carcinogenicidade (ANTARES)' },
    { field: 'carcinogenicityOralClassificationAssessment', headerName: 'Avaliação de Classificação Oral de Carcinogenicidade' },
    { field: 'carcinogenicityOralClassificationPrediction', headerName: 'Predição de Classificação Oral de Carcinogenicidade' },
    { field: 'carcinogenicityOralSlopeFactorAssessment', headerName: 'Avaliação de Fator de Inclinação Oral de Carcinogenicidade' },
    { field: 'carcinogenicityOralSlopeFactorPrediction', headerName: 'Predição de Fator de Inclinação Oral de Carcinogenicidade', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityInhalationClassificationAssessment', headerName: 'Avaliação de Classificação por Inalação de Carcinogenicidade' },
    { field: 'carcinogenicityInhalationClassificationPrediction', headerName: 'Predição de Classificação por Inalação de Carcinogenicidade' },
    { field: 'carcinogenicityInhalationSlopeFactorAssessment', headerName: 'Avaliação de Fator de Inclinação por Inalação de Carcinogenicidade' },
    { field: 'carcinogenicityInhalationSlopeFactorPrediction', headerName: 'Predição de Fator de Inclinação por Inalação de Carcinogenicidade', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityMaleRatAssessment', headerName: 'Avaliação de Carcinogenicidade em Ratos Machos' },
    { field: 'carcinogenicityMaleRatPrediction', headerName: 'Predição de Carcinogenicidade em Ratos Machos', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'carcinogenicityFemaleRatAssessment', headerName: 'Avaliação de Carcinogenicidade em Ratos Fêmeas' },
    { field: 'carcinogenicityFemaleRatPrediction', headerName: 'Predição de Carcinogenicidade em Ratos Fêmeas', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'acuteToxicityAssessment', headerName: 'Avaliação de Toxicidade Aguda' },
    { field: 'acuteToxicityPrediction', headerName: 'Predição de Toxicidade Aguda', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'hepatotoxicityAssessment', headerName: 'Avaliação de Hepatotoxicidade' },
    { field: 'hepatotoxicityPrediction', headerName: 'Predição de Hepatotoxicidade' },
    { field: 'logpMeylanKowwinAssessment', headerName: 'Avaliação de LogP (Meylan-Kowwin)' },
    { field: 'logpMeylanKowwinPrediction', headerName: 'Predição de LogP (Meylan-Kowwin)', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'logpMlogpAssessment', headerName: 'Avaliação de LogP (MLOGP)' },
    { field: 'logpMlogpPrediction', headerName: 'Predição de LogP (MLOGP)', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'logpAlogpAssessment', headerName: 'Avaliação de LogP (ALOGP)' },
    { field: 'logpAlogpPrediction', headerName: 'Predição de LogP (ALOGP)', type: 'numericColumn', filter: 'agNumberColumnFilter' },
    { field: 'organism', headerName: 'Organismo' },
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
      fileName: 'leishmania_data.csv' // Custom filename
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
          Tabela Leishmania
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
