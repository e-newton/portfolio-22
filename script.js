// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });

// anime({
//     targets: '.pathyboi',
//     duration: 1000,
//     easing: "easeInOutSine",
//     d: [
//         {
//             value:
//                 "M 75 0 A 75 75 0 0 1 75 0"
//         },
//         {
//             value:
//                 "M 75 0 A 75 75 0 0 1 0 75"
//         },
//     ]
// })

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function generateSkillAnimation(id, maxDegree) {
    const svg = document.querySelector(id);
    let theta = 0;
    const intervalID = setInterval(() => {
        const dString = `M 75 0 A 75 75 0 ${theta < 179 ? 0 : 1} 1 ${75 * Math.cos(degrees_to_radians(theta))} ${75 * Math.sin(degrees_to_radians(theta))}`;
        svg.setAttribute('d', dString);
        theta += 1;
        if (theta === maxDegree) {
            window.clearInterval(intervalID);
            if (maxDegree === 360) {
                svg.setAttribute('stroke', 'green')
            }
        }
    }, 1)
}

generateSkillAnimation('#angular', 360)
generateSkillAnimation('#typescript', 360)
generateSkillAnimation('#java', 360)
generateSkillAnimation('#react', 360 * 0.8)
generateSkillAnimation('#nodejs', 360 * 0.8)
generateSkillAnimation('#c', Math.floor(360 * 0.7))

const skills = document.querySelectorAll('.skill');
if (window.visualViewport.width > 450) {
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skills.forEach(s => {
                const desc = document.querySelector(`#${s.id}Desc`); 
                if (desc) {
                    desc.classList.remove('visible');
                }
                s.classList.remove('inset')
            });
            skill.classList.add('inset');
            document.querySelector(`#${skill.id}Desc`).classList.add('visible');
        })
    })
}

const radioButtons = document.querySelectorAll('#jobs input[type="radio"]');
let currentlySelectedJob;
radioButtons.forEach(radio => {
    const value = radio.value;
    const jobDesc = document.querySelector(`#${value}-desc`);
    if (radio.checked) {
        currentlySelectedJob = jobDesc;
        jobDesc.classList.add('visible');
    }
    radio.addEventListener('change', () => {
        if (radio.checked) {
            currentlySelectedJob.classList.remove('visible');
            currentlySelectedJob = jobDesc;
            jobDesc.classList.add('visible');
        } else {
            jobDesc.classList.remove('visible');
        }
    })
})