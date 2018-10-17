const App = ({app}) => {

	// Amp hack
	if(app.category.includes('amp;')){
		app.category = app.category.replace('amp;', '');
	} else if(app.name.includes('amp;')) {
		app.name = app.name.replace('amp;', '');
	}

	// Image hack
	const appImg = {
		'Games': "https://lh3.googleusercontent.com/EgO34BOGEhnGGd0Yk4HRppcYAF8RNF7-WCe0Y2j6rzvn5CGQlrQj6BxaCRT5h7PdnA=s360-rw",
		'Travel': "https://lh3.googleusercontent.com/BQnvuZR500pg2ulvv3FBmRI93ODz3AjNfbz92hCieuJLvmbGY36AKhETMTTfTDgpPQI=s360-rw",
		'Books': "https://lh3.googleusercontent.com/DglqS-eYHQYXnj8M8tmzh3JcKDXcidSo3IzgyCZzci8ZTV9Pmuk8vvIFh9XHOztC3Q=s360-rw",
		'Business': "https://lh3.googleusercontent.com/EUQGH40jV55Dm2mcGzT9I2_vSfl_rJv88dfrR3JGJkxgQMe2j4bXoFd-tvuYLSGhFIQ=s360-rw",
		'Catalogs': "https://lh3.googleusercontent.com/mVkC_plTfF5wPTIHGIt49B6CF926abGk1ujsDtNoyxhE9BULOEe4uP6vgF8BR8zGZqM=s360-rw",
		'Education': "https://lh3.googleusercontent.com/CG4ayrzpkNSwiILF90CfvgjeIGYeTJcjusOnFw-8AF-IT3ZZKE-axArJZeqQjnAMaSY=s360-rw",
		'Entertainment': "https://lh3.googleusercontent.com/jcbqFma-5e91cY9MlEasA-fvCRJK493MxphrqbBd8oS74FtYg00IXeOAn0ahsLprxIA=s360-rw",
		'Finance': "https://lh3.googleusercontent.com/7p-QoB5CTSX6AuB5R7HZazs1OMts5doDGmWjtEOoTTxkwueZc-jhqVHRGkBsXiV_aUA=s360-rw",
		'Medical': "https://lh3.googleusercontent.com/yNDRYk9DVQw7lt-6zp325yP_K0P0lvDu65QzaqZeVi6EtS1EHlPnWMOJ6dwxQu2nO0s=s360-rw",
		'Music': "https://lh3.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=s360-rw",
		'Navigation': "https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=s360-rw",
		'News': "https://lh3.googleusercontent.com/l8woCU1YmtyKlkNOh2TNvQJj8P78Rm56JljLDUj-83YzD3OU6UCvqM-vzqpBOkOrW2Q=s360-rw",
		'Newsstand': "https://lh3.googleusercontent.com/c6XaTWsHBTBpObva83I5q-5B6cHZmA4gk300V5Tv6wZKLrjRZ3jIa-Y0hb24rUlvaXo=s360-rw",
		'Photo & Video': "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=s360-rw",
		'Productivity': "https://lh3.googleusercontent.com/p_p6f6dEJzRtKB4EoV0dXYkesVF0Na10i039E-JS8xUvJ0f0OUuupY0NYAgLOr17HGKu=s360-rw",
		'Reference': "https://lh3.googleusercontent.com/wh62r5NkywZlFB3OqM_RUny7YSr4nDoGd5M6cj2N1Py1jLQS5MSnDKtach831GhxaVQ=s360-rw",
		'Social Networking': "https://lh3.googleusercontent.com/U2H5O-RNxa4OQKByVCdiqlASgXPvEg5EWx_E8IWWrdROOAetGa4SN-u4YNcnjSHakCCh=s360-rw",
		'Sports': "https://lh3.googleusercontent.com/0R5MXYkN1Kh5EGBDEWdxOTO7DGlQpOM64K6YrusGF-ixKM6qH8-GjBgmQg390ssG8w=s360-rw",
		'Health & Fitness': "https://lh3.googleusercontent.com/jArSD-kxOa2llPXvqrjRcEJdL4XhjP8-WqEfg9UAlYF8v0qzXAZ0EI5k96l0pf3tDNg=s360-rw"
	}

	return(
		<div className="app-wrap">
			<a className="app-img-anchor" href={app.link}>
				<img className="app-img" alt={app.name} src={appImg[app.category]}/>
			</a>
			<div className="app-info">
				<a href={app.link}>
					<div className="app-name">{app.name} <span className="text-fade"></span></div>
				</a>
				<div className="app-detail">{app.category === "Social Networking" ? "Social Network" : app.category} | Rank: {app.rank}</div>
			</div>
		</div>
	)
}

export default App;