# `googleDeveloperConnectConnection` Submodule <a name="`googleDeveloperConnectConnection` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectConnection <a name="GoogleDeveloperConnectConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnection(Construct Scope, string Id, GoogleDeveloperConnectConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig">PutGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig">PutGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig">PutGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig">PutGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig">ResetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig">ResetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig">ResetGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig"></a>

```csharp
private void PutCryptoKeyConfig(GoogleDeveloperConnectConnectionCryptoKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `PutGithubConfig` <a name="PutGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig"></a>

```csharp
private void PutGithubConfig(GoogleDeveloperConnectConnectionGithubConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `PutGithubEnterpriseConfig` <a name="PutGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```csharp
private void PutGithubEnterpriseConfig(GoogleDeveloperConnectConnectionGithubEnterpriseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `PutGitlabConfig` <a name="PutGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig"></a>

```csharp
private void PutGitlabConfig(GoogleDeveloperConnectConnectionGitlabConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `PutGitlabEnterpriseConfig` <a name="PutGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```csharp
private void PutGitlabEnterpriseConfig(GoogleDeveloperConnectConnectionGitlabEnterpriseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDeveloperConnectConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig"></a>

```csharp
private void ResetCryptoKeyConfig()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetGithubConfig` <a name="ResetGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig"></a>

```csharp
private void ResetGithubConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```csharp
private void ResetGithubEnterpriseConfig()
```

##### `ResetGitlabConfig` <a name="ResetGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig"></a>

```csharp
private void ResetGitlabConfig()
```

##### `ResetGitlabEnterpriseConfig` <a name="ResetGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```csharp
private void ResetGitlabEnterpriseConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectConnection.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState">InstallationState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput">GithubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput">GitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput">GitlabEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference CryptoKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GithubConfig`<sup>Required</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfigOutputReference GithubConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference GithubEnterpriseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `GitlabConfig`<sup>Required</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigOutputReference GitlabConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `GitlabEnterpriseConfig`<sup>Required</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference GitlabEnterpriseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `InstallationState`<sup>Required</sup> <a name="InstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState"></a>

```csharp
public GoogleDeveloperConnectConnectionInstallationStateList InstallationState { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `GithubConfigInput`<sup>Optional</sup> <a name="GithubConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfig GithubConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `GitlabConfigInput`<sup>Optional</sup> <a name="GitlabConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfig GitlabConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `GitlabEnterpriseConfigInput`<sup>Optional</sup> <a name="GitlabEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectConnectionConfig <a name="GoogleDeveloperConnectConnectionConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleDeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfig = null,
    object Disabled = null,
    string Etag = null,
    GoogleDeveloperConnectConnectionGithubConfig GithubConfig = null,
    GoogleDeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfig = null,
    GoogleDeveloperConnectConnectionGitlabConfig GitlabConfig = null,
    GoogleDeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDeveloperConnectConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled">Disabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag">Etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig">GithubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig">GitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">GitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionCryptoKeyConfig CryptoKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#crypto_key_config GoogleDeveloperConnectConnection#crypto_key_config}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}

---

##### `GithubConfig`<sup>Optional</sup> <a name="GithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfig GithubConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfig GithubEnterpriseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#github_enterprise_config GoogleDeveloperConnectConnection#github_enterprise_config}

---

##### `GitlabConfig`<sup>Optional</sup> <a name="GitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfig GitlabConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#gitlab_config GoogleDeveloperConnectConnection#gitlab_config}

---

##### `GitlabEnterpriseConfig`<sup>Optional</sup> <a name="GitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfig GitlabEnterpriseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#gitlab_enterprise_config GoogleDeveloperConnectConnection#gitlab_enterprise_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}

---

### GoogleDeveloperConnectConnectionCryptoKeyConfig <a name="GoogleDeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionCryptoKeyConfig {
    string KeyReference
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>string</code> | Required. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```csharp
public string KeyReference { get; set; }
```

- *Type:* string

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#key_reference GoogleDeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubConfig <a name="GoogleDeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubConfig {
    string GithubApp,
    string AppInstallationId = null,
    GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp">GithubApp</a></code> | <code>string</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```csharp
public string GithubApp { get; set; }
```

- *Type:* string

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; set; }
```

- *Type:* string

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `AuthorizerCredential`<sup>Optional</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential {
    string OauthTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```csharp
public string OauthTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubEnterpriseConfig {
    string HostUri,
    string AppId = null,
    string AppInstallationId = null,
    string PrivateKeySecretVersion = null,
    GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null,
    string WebhookSecretSecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId">AppId</a></code> | <code>string</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#app_id GoogleDeveloperConnectConnection#app_id}

---

##### `AppInstallationId`<sup>Optional</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; set; }
```

- *Type:* string

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `PrivateKeySecretVersion`<sup>Optional</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```csharp
public string PrivateKeySecretVersion { get; set; }
```

- *Type:* string

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#private_key_secret_version GoogleDeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

##### `WebhookSecretSecretVersion`<sup>Optional</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionGitlabConfig <a name="GoogleDeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfig {
    GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredential,
    GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfig {
    GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredential,
    string HostUri,
    GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredential,
    string WebhookSecretSecretVersion,
    GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig = null,
    string SslCaCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; set; }
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; set; }
```

- *Type:* string

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential {
    string UserTokenSecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; set; }
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionInstallationState <a name="GoogleDeveloperConnectConnectionInstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionInstallationState {

};
```


### GoogleDeveloperConnectConnectionTimeouts <a name="GoogleDeveloperConnectConnectionTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```csharp
public string KeyReferenceInput { get; }
```

- *Type:* string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```csharp
public string KeyReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionCryptoKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---


### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">OauthTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">OauthTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `OauthTokenSecretVersionInput`<sup>Optional</sup> <a name="OauthTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```csharp
public string OauthTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `OauthTokenSecretVersion`<sup>Required</sup> <a name="OauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```csharp
public string OauthTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGithubConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">ResetAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```csharp
private void ResetAppInstallationId()
```

##### `ResetAuthorizerCredential` <a name="ResetAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```csharp
private void ResetAuthorizerCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">GithubAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">GithubApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```csharp
public string InstallationUri { get; }
```

- *Type:* string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```csharp
public string AppInstallationIdInput { get; }
```

- *Type:* string

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `GithubAppInput`<sup>Optional</sup> <a name="GithubAppInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```csharp
public string GithubAppInput { get; }
```

- *Type:* string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; }
```

- *Type:* string

---

##### `GithubApp`<sup>Required</sup> <a name="GithubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```csharp
public string GithubApp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">ResetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">ResetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">ResetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```csharp
private void ResetAppId()
```

##### `ResetAppInstallationId` <a name="ResetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```csharp
private void ResetAppInstallationId()
```

##### `ResetPrivateKeySecretVersion` <a name="ResetPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```csharp
private void ResetPrivateKeySecretVersion()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```

##### `ResetWebhookSecretSecretVersion` <a name="ResetWebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```csharp
private void ResetWebhookSecretSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">AppSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">InstallationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">AppInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">PrivateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">AppInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">PrivateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```csharp
public string AppSlug { get; }
```

- *Type:* string

---

##### `InstallationUri`<sup>Required</sup> <a name="InstallationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```csharp
public string InstallationUri { get; }
```

- *Type:* string

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppInstallationIdInput`<sup>Optional</sup> <a name="AppInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```csharp
public string AppInstallationIdInput { get; }
```

- *Type:* string

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `PrivateKeySecretVersionInput`<sup>Optional</sup> <a name="PrivateKeySecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```csharp
public string PrivateKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppInstallationId`<sup>Required</sup> <a name="AppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```csharp
public string AppInstallationId { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `PrivateKeySecretVersion`<sup>Required</sup> <a name="PrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```csharp
public string PrivateKeySecretVersion { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">PutAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">PutReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerCredential` <a name="PutAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```csharp
private void PutAuthorizerCredential(GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `PutReadAuthorizerCredential` <a name="PutReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```csharp
private void PutReadAuthorizerCredential(GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">AuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">ReadAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">ServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">AuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">ReadAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">WebhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">WebhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerCredential`<sup>Required</sup> <a name="AuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference AuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `ReadAuthorizerCredential`<sup>Required</sup> <a name="ReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference ReadAuthorizerCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `ServerVersion`<sup>Required</sup> <a name="ServerVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```csharp
public string ServerVersion { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `AuthorizerCredentialInput`<sup>Optional</sup> <a name="AuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential AuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `ReadAuthorizerCredentialInput`<sup>Optional</sup> <a name="ReadAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential ReadAuthorizerCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```csharp
public string SslCaCertificateInput { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersionInput`<sup>Optional</sup> <a name="WebhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```csharp
public string WebhookSecretSecretVersionInput { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```csharp
public string SslCaCertificate { get; }
```

- *Type:* string

---

##### `WebhookSecretSecretVersion`<sup>Required</sup> <a name="WebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```csharp
public string WebhookSecretSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">UserTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">UserTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersionInput`<sup>Optional</sup> <a name="UserTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```csharp
public string UserTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `UserTokenSecretVersion`<sup>Required</sup> <a name="UserTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```csharp
public string UserTokenSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionInstallationStateList <a name="GoogleDeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionInstallationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get"></a>

```csharp
private GoogleDeveloperConnectConnectionInstallationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectConnectionInstallationStateOutputReference <a name="GoogleDeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionInstallationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">ActionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionUri`<sup>Required</sup> <a name="ActionUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```csharp
public string ActionUri { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectConnectionInstallationState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a>

---


### GoogleDeveloperConnectConnectionTimeoutsOutputReference <a name="GoogleDeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



