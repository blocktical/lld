from abc import ABC, abstractmethod

class DataPipeline(ABC):
    def run_pipeline(self):
        self.connect()
        self.fetch_data()
        self.clean_data()
        self.save_data()

    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def fetch_data(self):
        pass

    def clean_data(self):
        print("Cleaning and transforming data...")

    def save_data(self):
        print("Saving data to data warehouse...")

class MySQLPipeline(DataPipeline):
    def connect(self):
        print("Connecting to MySQL database...")

    def fetch_data(self):
        print("Fetching data from MySQL table...")

class CSVFilePipeline(DataPipeline):
    def connect(self):
        print("Opening CSV file...")

    def fetch_data(self):
        print("Reading data from CSV rows...")

class APIPipeline(DataPipeline):
    def connect(self):
        print("Calling external API...")

    def fetch_data(self):
        print("Parsing response from API...")
