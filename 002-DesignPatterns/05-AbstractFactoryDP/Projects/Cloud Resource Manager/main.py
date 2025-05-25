from factories.aws_factory import AWSFactory
from factories.azure_factory import AzureFactory
from factories.gcp_factory import GCPFactory

def client_code(factory):
    vm = factory.create_vm()
    storage = factory.create_storage()

    vm.launch()
    storage.attach()

if __name__ == "__main__":
    choice = input("Choose cloud provider (aws/azure/gcp): ").lower()

    if choice == "aws":
        factory = AWSFactory()
    elif choice == "azure":
        factory = AzureFactory()
    elif choice == "gcp":
        factory = GCPFactory()
    else:
        print("Invalid choice")
        exit()

    client_code(factory)
