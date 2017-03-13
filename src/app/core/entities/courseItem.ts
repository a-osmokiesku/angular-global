import { ICourseItem } from '../abstraction/ICurseItem';

export  class CourseItem implements ICourseItem {
	public id: number;
    public title: string;
    public description: string;
    public duration: number;
    public creatingDate: Date;

	constructor(title: string, duration: number, startDate: Date, description: string) {
		this.id = this.getRandomInt(0, 2147483647)
		this.title = title;
		this.duration = duration;
		this.creatingDate = startDate;
		this.description = description;
	}

	private getRandomInt(min: number, max: number): number {
        return (Math.random() * (max - min + 1) | 0) + min;
    }   
}
