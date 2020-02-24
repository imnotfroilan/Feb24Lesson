
//8 STATIC METHOD

class Studentz
{
    constructor(name, course, section)
    {
        this.name = name;
        this.course = course;
        this.section = section;
    }
    
    enroll(subject)
    {
        console.log(`${this.name} is enrolled in ${subject}`);
    }
    
}

let unangStudent = new Studentz ("maria alphachupapi", "Nursing", "1Nu2");
Studentz.enroll("biology");