# 📊 Template Method Design Pattern: Data Pipeline Project

## 🚀 Overview

This project simulates real-world **data pipelines** used by top IT companies like Amazon or Netflix.  
It follows the **Template Method Pattern** to structure the pipeline steps, while allowing flexibility for specific data sources.

---

## 📁 Project Structure

- `DataPipeline`: Abstract base class with a fixed pipeline structure.
- `MySQLPipeline`, `CSVFilePipeline`, `APIPipeline`: Custom implementations for each data source.

---

## 🔄 Pipeline Steps

1. Connect to source
2. Fetch data
3. Clean/Transform data
4. Save to target

---
## 🧠 Why Template Method?

- Common pipeline steps abstracted
- Only variable steps overridden
- Clean, maintainable & scalable design

---

## 🎯 Real-World Applications

- ETL pipelines
- Web scraping tasks
- Multi-source data ingestion
