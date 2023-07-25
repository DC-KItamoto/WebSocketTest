function JoinForm({setAccount}) {

	function create(e) {
		e.preventDefault();
		setAccount({
			name: e.target.name.value,
			color: e.target.color.value,
		});
	}
  return (
			<form action='#' method="post" onSubmit={create} encType="">
				<input type="text" name="name" placeholder='名前'/>
				<select name="color" id="">
					<option value="red">赤</option>
					<option value="yello">黄色</option>
					<option value="green">緑</option>
					<option value="aqua">水色</option>
					<option value="blue">青</option>
					<option value="black">黒</option>
				</select>
				<input type="submit" value="参加" />
			</form>
  );
}
export default JoinForm;