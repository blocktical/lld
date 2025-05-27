# main.py

from builder import ResumeBuilder

def main():
    print("👷‍♂️ Welcome to Resume Builder 👷‍♀️\n")

    builder = ResumeBuilder()

    name = input("Enter your name: ")
    builder.set_name(name)

    email = input("Enter your email: ")
    builder.set_email(email)

    phone = input("Enter your phone: ")
    builder.set_phone(phone)

    education = input("Enter your highest education: ")
    builder.set_education(education)

    experience = input("Enter your experience summary: ")
    builder.set_experience(experience)

    print("\nAdd at least 1 skill. Type 'done' to finish:")
    while True:
        skill = input("Enter skill: ")
        if skill.lower() == "done":
            break
        builder.add_skill(skill)

    resume = builder.build()
    print(resume)

if __name__ == "__main__":
    main()
