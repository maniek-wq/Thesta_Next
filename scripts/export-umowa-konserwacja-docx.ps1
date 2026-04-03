# Eksport umowy MD -> DOCX (Pandoc). Uruchom z dowolnego miejsca:
#   powershell -File .\scripts\export-umowa-konserwacja-docx.ps1
$ErrorActionPreference = "Stop"
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")

# Odśwież PATH (po instalacji Pandoc przez winget nowa sesja tego wymaga)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
  [System.Environment]::GetEnvironmentVariable("Path", "User")

$pandocExe = $null
$cmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($cmd) {
  $pandocExe = $cmd.Source
} else {
  $found = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Filter "pandoc.exe" -Recurse -ErrorAction SilentlyContinue |
    Select-Object -First 1 -ExpandProperty FullName
  if ($found) { $pandocExe = $found }
}

if (-not $pandocExe) {
  Write-Error "Nie znaleziono pandoc.exe. Zainstaluj: winget install --id JohnMacFarlane.Pandoc -e"
}

$md = Join-Path $repoRoot "docs\umowy\Umowa_wykonania_strony_i_konserwacji.md"
$docx = Join-Path $repoRoot "docs\umowy\Umowa_wykonania_strony_i_konserwacji.docx"

if (-not (Test-Path $md)) {
  Write-Error "Brak pliku: $md"
}

& $pandocExe -f markdown -t docx -o $docx $md
Write-Host "Zapisano: $docx"
