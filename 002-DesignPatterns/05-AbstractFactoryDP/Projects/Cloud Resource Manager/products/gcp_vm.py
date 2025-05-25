from products.abstract_vm import AbstractVM

class GCPVM(AbstractVM):
    def launch(self):
        print("Launching GCP Compute Engine")