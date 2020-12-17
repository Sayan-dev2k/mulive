const WHITE_KEYS=['i','j','k','l','m','n']
const BLACK_KEYS=['c','d','e','f','g']

const keys=document.querySelectorAll('.key')
const whitekeys=document.querySelectorAll('.key.white')
const blackkeys=document.querySelectorAll('.key.black')

keys.forEach(key =>{
	key.addEventListener('click',() => playNote(key))
})
document.addEventListener('keydown',e =>{
	if(e.repeat)
		return
	const key=e.key
	const whitekeyIndex=WHITE_KEYS.indexOf(key)
	const blackkeyIndex=BLACK_KEYS.indexOf(key)
	
	if(whitekeyIndex>-1)
		playNote(whitekeys[whitekeyIndex])
	if(blackkeyIndex>-1)
		playNote(blackkeys[blackkeyIndex])
})
 playNote=key=> {
	const noteAudio=document.getElementById(key.dataset.note)
	noteAudio.currentTime=0
	noteAudio.play()
	key.classList.add('active')
	noteAudio.addEventListener('ended',() => {
		key.classList.remove('active')
	})
}
	