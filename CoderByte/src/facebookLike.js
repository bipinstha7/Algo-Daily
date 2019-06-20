/**
 * You probably know the "like" system from Facebook and other pages.
 * People can "like" blog posts, pictures or other items. We want to create
 * the text that should be displayed next to such an item.
 * Implement a function likes :: [String] -> String, which must take in input array,
 * containing the names of people who like an item.
 * It must return the display text as shown in the examples:
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others
 * like this"
 */

function likes(likedBy) {
	if (!likedBy.length) {
		return 'no one likes this'
	}

	if (likedBy.length === 1) {
		return `${likedBy[0]} likes this`
	}

	if (likedBy.length === 2) {
		return `${likedBy[0]} and ${likedBy[1]} like this`
	}

	if (likedBy.length === 3) {
		return `${likedBy[0]}, ${likedBy[1]} and ${likedBy[2]} like this`
	}

	return `${likedBy[0]}, ${likedBy[1]} and ${likedBy.length - 2} others like this`
}

module.exports = likes