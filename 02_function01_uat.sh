resourceGroupName=bitfans_uat
functionName02=bitfunctionuat01


az functionapp deployment source config-zip  --name  ${functionName02} --src bitfans_uat.zip --resource-group ${resourceGroupName}