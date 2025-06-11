```mermaid
classDiagram
    class DataPipeline {
        +run_pipeline()
        +connect()
        +fetch_data()
        +clean_data()
        +save_data()
    }

    class MySQLPipeline {
        +connect()
        +fetch_data()
    }

    class CSVFilePipeline {
        +connect()
        +fetch_data()
    }

    class APIPipeline {
        +connect()
        +fetch_data()
    }

    DataPipeline <|-- MySQLPipeline
    DataPipeline <|-- CSVFilePipeline
    DataPipeline <|-- APIPipeline