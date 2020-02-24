//encapsulation 

class Student
{
    setName(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setSection(Section)
    {
        this.Section = Section;
    }

    getSection()
    {
        return this.Section;
    }

    setCourse(Course)
    {
        this.Course = Course;
    }

    getCourse()
    {
        return this.Course;
    }

    showInfo()
    {
        console.log(`${this.name}, ${this.Section}, ${this.Course}`);
    }
}

let stud = new Student();
stud.setName ("Ranchodas Chamaldas Chanchan");
stud.setSection ("1CS");
stud.setCourse  ("Computer Science");

stud.showInfo();