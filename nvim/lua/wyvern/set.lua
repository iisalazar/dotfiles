vim.opt.guicursor = ""

vim.opt.nu = true -- show line number
vim.opt.relativenumber = true -- show relative line number

vim.opt.tabstop = 2 -- tab == 2 spaces
vim.opt.softtabstop = 2 -- tab == 2 spaces
vim.opt.shiftwidth = 2 -- tab == 2 spaces
vim.opt.expandtab = true -- tab == 2 spaces

vim.opt.smartindent = true

vim.opt.wrap = true -- don't wrap lines

vim.opt.termguicolors = true -- enable 24-bit RGB colors

vim.opt.swapfile = false -- don't create swap files
vim.opt.backup = false
vim.opt.undodir = os.getenv("HOME") .. "/.config/nvim/undodir"
vim.opt.undofile = true -- enable undo files

vim.opt.hlsearch = false -- highlight search results
vim.opt.incsearch = true -- incremental search

vim.opt.scrolloff = 8 -- keep 8 lines above/below cursor when scrolling
vim.opt.signcolumn = "yes" -- always show sign column
vim.opt.isfname:append("@-@") -- allow @ in filenames

vim.opt.updatetime = 50 -- update interval for gitsigns
vim.opt.colorcolumn = "80" -- line length marker at 80 columns

vim.g.mapleader = " "








