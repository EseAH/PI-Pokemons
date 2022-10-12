const validName = /^[a-z]+$/i;
const validUrl = /^(ftp|http|https):\/\/[^ "]+$/;
const validNum = /^\d+$/;

function validate(input) {
    let errors = {}
    if (!input.name || !validName.test(input.name) || input.name.length < 3) {
        errors.name = "Error name. Only letters and more than 3 characters are allowed"
    }
    if (!validUrl.test(input.image)) {
        errors.image = "Error image. Url required"
    }
    if (!input.types) {
        errors.types = "Type required"
    }
    if (!input.hp || !validNum.test(input.hp) || parseInt(input.hp < 1)) {
        errors.hp = "Error hp. Number required, higher than 1"
    }
    if (!input.attack || !validNum.test(input.attack) || parseInt(input.attack < 1)) {
        errors.attack = "Error attack. Number required, higher than 1"
    }
    if (!input.defense || !validNum.test(input.defense) || parseInt(input.defense < 1)) {
        errors.defense = "Error defense. Number required, higher than 1"
    }
    if (!validNum.test(input.speed) || parseInt(input.speed < 1)) {
        errors.speed = "Error speed. Number required, higher than 1"
    }
    if (!validNum.test(input.height) || parseInt(input.height < 1)) {
        errors.height = "Error height. Number required, higher than 1"
    }
    if (!validNum.test(input.weight) || parseInt(input.weight < 1)) {
        errors.weight = "Error weight. Number required, higher than 1"
    }

    return errors
}

module.exports = { validate }