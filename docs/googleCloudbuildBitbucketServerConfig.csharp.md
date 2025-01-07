# `googleCloudbuildBitbucketServerConfig` Submodule <a name="`googleCloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildBitbucketServerConfig <a name="GoogleCloudbuildBitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfig(Construct Scope, string Id, GoogleCloudbuildBitbucketServerConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig">GoogleCloudbuildBitbucketServerConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig">GoogleCloudbuildBitbucketServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories">PutConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories">ResetConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork">ResetPeeredNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectedRepositories` <a name="PutConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```csharp
private void PutConnectedRepositories(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* object

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets"></a>

```csharp
private void PutSecrets(GoogleCloudbuildBitbucketServerConfigSecrets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudbuildBitbucketServerConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

---

##### `ResetConnectedRepositories` <a name="ResetConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```csharp
private void ResetConnectedRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPeeredNetwork` <a name="ResetPeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```csharp
private void ResetPeeredNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa"></a>

```csharp
private void ResetSslCa()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudbuildBitbucketServerConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudbuildBitbucketServerConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudbuildBitbucketServerConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudbuildBitbucketServerConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudbuildBitbucketServerConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudbuildBitbucketServerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildBitbucketServerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey">WebhookKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">ConnectedRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput">HostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput">PeeredNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput">SecretsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput">SslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri">HostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa">SslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectedRepositories`<sup>Required</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList ConnectedRepositories { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigSecretsOutputReference Secrets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `WebhookKey`<sup>Required</sup> <a name="WebhookKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey"></a>

```csharp
public string WebhookKey { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `ConnectedRepositoriesInput`<sup>Optional</sup> <a name="ConnectedRepositoriesInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```csharp
public object ConnectedRepositoriesInput { get; }
```

- *Type:* object

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```csharp
public string HostUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PeeredNetworkInput`<sup>Optional</sup> <a name="PeeredNetworkInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```csharp
public string PeeredNetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigSecrets SecretsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```csharp
public string SslCaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri"></a>

```csharp
public string HostUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```csharp
public string PeeredNetwork { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa"></a>

```csharp
public string SslCa { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildBitbucketServerConfigConfig <a name="GoogleCloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiKey,
    string ConfigId,
    string HostUri,
    string Location,
    GoogleCloudbuildBitbucketServerConfigSecrets Secrets,
    string Username,
    object ConnectedRepositories = null,
    string Id = null,
    string PeeredNetwork = null,
    string Project = null,
    string SslCa = null,
    GoogleCloudbuildBitbucketServerConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId">ConfigId</a></code> | <code>string</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri">HostUri</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username">Username</a></code> | <code>string</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code>object</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>string</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa">SslCa</a></code> | <code>string</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#api_key GoogleCloudbuildBitbucketServerConfig#api_key}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#config_id GoogleCloudbuildBitbucketServerConfig#config_id}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```csharp
public string HostUri { get; set; }
```

- *Type:* string

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#host_uri GoogleCloudbuildBitbucketServerConfig#host_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#location GoogleCloudbuildBitbucketServerConfig#location}

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigSecrets Secrets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#secrets GoogleCloudbuildBitbucketServerConfig#secrets}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#username GoogleCloudbuildBitbucketServerConfig#username}

---

##### `ConnectedRepositories`<sup>Optional</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```csharp
public object ConnectedRepositories { get; set; }
```

- *Type:* object

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#connected_repositories GoogleCloudbuildBitbucketServerConfig#connected_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeeredNetwork`<sup>Optional</sup> <a name="PeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```csharp
public string PeeredNetwork { get; set; }
```

- *Type:* string

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#peered_network GoogleCloudbuildBitbucketServerConfig#peered_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```csharp
public string SslCa { get; set; }
```

- *Type:* string

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#ssl_ca GoogleCloudbuildBitbucketServerConfig#ssl_ca}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#timeouts GoogleCloudbuildBitbucketServerConfig#timeouts}

---

### GoogleCloudbuildBitbucketServerConfigConnectedRepositories <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigConnectedRepositories {
    string ProjectKey,
    string RepoSlug
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">ProjectKey</a></code> | <code>string</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">RepoSlug</a></code> | <code>string</code> | Identifier for the repository. |

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#project_key GoogleCloudbuildBitbucketServerConfig#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```csharp
public string RepoSlug { get; set; }
```

- *Type:* string

Identifier for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#repo_slug GoogleCloudbuildBitbucketServerConfig#repo_slug}

---

### GoogleCloudbuildBitbucketServerConfigSecrets <a name="GoogleCloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigSecrets {
    string AdminAccessTokenVersionName,
    string ReadAccessTokenVersionName,
    string WebhookSecretVersionName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>string</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>string</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>string</code> | Immutable. |

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```csharp
public string AdminAccessTokenVersionName { get; set; }
```

- *Type:* string

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#admin_access_token_version_name GoogleCloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```csharp
public string ReadAccessTokenVersionName { get; set; }
```

- *Type:* string

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#read_access_token_version_name GoogleCloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```csharp
public string WebhookSecretVersionName { get; set; }
```

- *Type:* string

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#webhook_secret_version_name GoogleCloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### GoogleCloudbuildBitbucketServerConfigTimeouts <a name="GoogleCloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```csharp
private GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">RepoSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```csharp
public string RepoSlugInput { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```csharp
public string RepoSlug { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudbuildBitbucketServerConfigSecretsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">AdminAccessTokenVersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">ReadAccessTokenVersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">WebhookSecretVersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminAccessTokenVersionNameInput`<sup>Optional</sup> <a name="AdminAccessTokenVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```csharp
public string AdminAccessTokenVersionNameInput { get; }
```

- *Type:* string

---

##### `ReadAccessTokenVersionNameInput`<sup>Optional</sup> <a name="ReadAccessTokenVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```csharp
public string ReadAccessTokenVersionNameInput { get; }
```

- *Type:* string

---

##### `WebhookSecretVersionNameInput`<sup>Optional</sup> <a name="WebhookSecretVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```csharp
public string WebhookSecretVersionNameInput { get; }
```

- *Type:* string

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```csharp
public string AdminAccessTokenVersionName { get; }
```

- *Type:* string

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```csharp
public string ReadAccessTokenVersionName { get; }
```

- *Type:* string

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```csharp
public string WebhookSecretVersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudbuildBitbucketServerConfigSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---


### GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



