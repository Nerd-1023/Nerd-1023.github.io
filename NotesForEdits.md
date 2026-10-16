### Some things that are missing that you may want to try adding:
* Only one image on screen for the magma and forest themes. Make it fit screen. (not tiled but make sure all the different layers still line up)
* Themes dropdown instead of list of links
* Formatting could be made better, for example indentation, if you want to fix that
* Improve theme colors?
* Is wording of the site confusing?
* Words escape the div when you zoom out enough. Do icons loop back and make a new line when you add enough (MAKE SURE TO EDIT loadImages.js)
* Is there a cleaner font to change to? rounded div borders? 
### Notes on current state of the site
* theme/XX_theme_original.jpg: unedited Minecraft image
* theme/XX_theme_normal.jpg: Background outside of boxes (some edits to make it brighter)
* theme/XX_theme_halfblur.jpg: Outer box layer (blurred and darker)
* theme/XX_theme_blur.jpg: Inner box layer (same blur, even darker)
* icons/icon_X.png: The icons in the inner layer. "STOLEN" watermark and some blur to prevent people from just downloading it, so I can remove the image from the site when it's been taken
* icons/loadImages.js: Loads all icon images. NumberOfImages is manually set when I add more images.
* icons/theme_XX.html and icons/index.html (dark theme): The different HTML files for each theme. Could maybe be put into one HTML file with javascript to change themes if possible?
* Themes:
  * Forest: https://modrinth.com/datapack/better-forest-biome
  * Magma: https://modrinth.com/resourcepack/rainbow-magma (currently a draft on Modrinth, the background is just a wall of the blocks. The texture is the top right at https://discord.com/channels/734077874708938864/783091855616901200/1558931920317059123 in the Modrinth discord if you want to replace the in game image with tiled textures)
  * Dark: Background #303030, icons #505050
  * Light: Background #C0C0C0, icons #A0A0A0 (too dark?)
