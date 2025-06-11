from pipeline import MySQLPipeline, CSVFilePipeline, APIPipeline

if __name__ == "__main__":
    print("Running MySQL Pipeline:")
    mysql = MySQLPipeline()
    mysql.run_pipeline()

    print("\nRunning CSV File Pipeline:")
    csv = CSVFilePipeline()
    csv.run_pipeline()

    print("\nRunning API Pipeline:")
    api = APIPipeline()
    api.run_pipeline()
