enum DegreeType {
  BS,
  BA,
  Minor
}

enum GenEds {
  LF,
  CI,
  BN
}

class Course {
  department: string
  genEds: GenEds[]
  number: number
  constructor(department: string, genEds: GenEds[], number: number) {
    this.department = department
    this.genEds = genEds
    this.number = number
  }
}

class CourseBlock {
  course: Course
  constructor(course: Course) {
    this.course = course
  }
}

class SmallGroupBlock extends CourseBlock {
  group: Course[]
  constructor(group: Course[]) {
    super(group[0])
    this.group = group
  }
}

// TODO: Make this better
class LargeGroupBlock extends CourseBlock {
  group: Course[]
  fetchCourses: () => Course[]
  constructor(fetchCourses: () => Course[]) {
    super(null)
    this.fetchCourses = fetchCourses
    this.group = this.fetchCourses()
    super.course = this.group[0]
  }
}

class Major {
  department: string
  type: DegreeType
  totalCourses: number

  constructor(department: string, type: DegreeType, totalCourses: number) {
    this.department = department
    this.type = type
    this.totalCourses = totalCourses
  }

  validate(schedule: Course[]) {

  }
}