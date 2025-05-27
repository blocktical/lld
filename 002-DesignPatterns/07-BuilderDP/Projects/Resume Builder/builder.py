# builder.py

class Resume:
    def __init__(self):
        self.name = None
        self.email = None
        self.phone = None
        self.education = None
        self.experience = None
        self.skills = []

    def __str__(self):
        return (
            f"\n===== RESUME =====\n"
            f"Name       : {self.name}\n"
            f"Email      : {self.email}\n"
            f"Phone      : {self.phone}\n"
            f"Education  : {self.education}\n"
            f"Experience : {self.experience}\n"
            f"Skills     : {', '.join(self.skills)}\n"
            f"==================="
        )


class ResumeBuilder:
    def __init__(self):
        self.resume = Resume()

    def set_name(self, name):
        self.resume.name = name
        return self

    def set_email(self, email):
        self.resume.email = email
        return self

    def set_phone(self, phone):
        self.resume.phone = phone
        return self

    def set_education(self, education):
        self.resume.education = education
        return self

    def set_experience(self, experience):
        self.resume.experience = experience
        return self

    def add_skill(self, skill):
        self.resume.skills.append(skill)
        return self

    def build(self):
        return self.resume
