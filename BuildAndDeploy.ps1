gulp clean
gulp bundle --ship
gulp package-solution --ship
$username = $Env:SHAREPOINT_RU_USERNAME
$password = $Env:SHAREPOINT_RU_PASSWORD
$url = $Env:SHAREPOINT_RU_URL
$userCredential = New-Object -TypeName System.Management.Automation.PSCredential -argumentlist $userName, $(convertto-securestring $Password -asplaintext -force)
Connect-PnPOnline -Url $url -Credential $userCredential
Add-PnPApp -Path sharepoint/solution/sharepoint-ru.sppkg -Overwrite