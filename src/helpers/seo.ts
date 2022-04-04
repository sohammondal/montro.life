export const buildSEO = {
  course: (courseData: any) => {
    if (!courseData) return {}

    const { details: description, subjects } = courseData
    const title =
      subjects?.map((subject: any) => subject.name).join(' • ') + ' | Courses'

    return {
      title,
      description,
      openGraph: {
        images: [{ url: subjects[0].image, alt: title }],
      },
    }
  },
}
