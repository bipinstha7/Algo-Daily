const likes = require('../src/facebookLike')

describe('Facebook Like', () => {
	it('should not return person', () => {
		const likedBy = []
		const result = likes(likedBy)
		expect(result).toBe('no one likes this')
	})

	it('should return single person', () => {
		const likedBy = ['Peter']
		const result = likes(likedBy)
		expect(result).toBe('Peter likes this')
	})

	it('should return two persons', () => {
		const likedBy = ['Jacob', 'Alex']
		const result = likes(likedBy)
		expect(result).toBe('Jacob and Alex like this')
	})

	it('should return three person', () => {
		const likedBy = ['Max', 'John', 'Mark']
		const result = likes(likedBy)
		expect(result).toBe('Max, John and Mark like this')
	})

	it('should return two persons and two others', () => {
		const likedBy = ['Max', 'John', 'Mark', 'Max']
		const result = likes(likedBy)
		expect(result).toBe('Max, John and 2 others like this')
	})

	it('should return two persons and three others', () => {
		const likedBy = ['Bipin', 'Shrestha', 'Mark', 'Max', 'Gurung']
		const result = likes(likedBy)
		expect(result).toBe('Bipin, Shrestha and 3 others like this')
	})

	it('should return two persons and five others', () => {
		const likedBy = ['Benzema', 'Hazard', 'Mark', 'Max', 'Ramos', 'Marcelo', 'Modric']
		const result = likes(likedBy)
		expect(result).toBe('Benzema, Hazard and 5 others like this')
	})
})
