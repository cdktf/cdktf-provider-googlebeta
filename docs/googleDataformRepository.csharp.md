# `googleDataformRepository` Submodule <a name="`googleDataformRepository` Submodule" id="@cdktf/provider-google-beta.googleDataformRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepository <a name="GoogleDataformRepository" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository google_dataform_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepository(Construct Scope, string Id, GoogleDataformRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig">GoogleDataformRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig">GoogleDataformRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings">PutGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides">PutWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetGitRemoteSettings">ResetGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetNpmrcEnvironmentVariablesSecretVersion">ResetNpmrcEnvironmentVariablesSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetWorkspaceCompilationOverrides">ResetWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGitRemoteSettings` <a name="PutGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings"></a>

```csharp
private void PutGitRemoteSettings(GoogleDataformRepositoryGitRemoteSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putGitRemoteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataformRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a>

---

##### `PutWorkspaceCompilationOverrides` <a name="PutWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides"></a>

```csharp
private void PutWorkspaceCompilationOverrides(GoogleDataformRepositoryWorkspaceCompilationOverrides Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.putWorkspaceCompilationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGitRemoteSettings` <a name="ResetGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetGitRemoteSettings"></a>

```csharp
private void ResetGitRemoteSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNpmrcEnvironmentVariablesSecretVersion` <a name="ResetNpmrcEnvironmentVariablesSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetNpmrcEnvironmentVariablesSecretVersion"></a>

```csharp
private void ResetNpmrcEnvironmentVariablesSecretVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkspaceCompilationOverrides` <a name="ResetWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.resetWorkspaceCompilationOverrides"></a>

```csharp
private void ResetWorkspaceCompilationOverrides()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataformRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataformRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataformRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataformRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataformRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataformRepository resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataformRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataformRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataformRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference">GoogleDataformRepositoryGitRemoteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference">GoogleDataformRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference">GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettingsInput">GitRemoteSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput">NpmrcEnvironmentVariablesSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverridesInput">WorkspaceCompilationOverridesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.npmrcEnvironmentVariablesSecretVersion">NpmrcEnvironmentVariablesSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GitRemoteSettings`<sup>Required</sup> <a name="GitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettings"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettingsOutputReference GitRemoteSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference">GoogleDataformRepositoryGitRemoteSettingsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeouts"></a>

```csharp
public GoogleDataformRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference">GoogleDataformRepositoryTimeoutsOutputReference</a>

---

##### `WorkspaceCompilationOverrides`<sup>Required</sup> <a name="WorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverrides"></a>

```csharp
public GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference WorkspaceCompilationOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference">GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GitRemoteSettingsInput`<sup>Optional</sup> <a name="GitRemoteSettingsInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.gitRemoteSettingsInput"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettings GitRemoteSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NpmrcEnvironmentVariablesSecretVersionInput`<sup>Optional</sup> <a name="NpmrcEnvironmentVariablesSecretVersionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.npmrcEnvironmentVariablesSecretVersionInput"></a>

```csharp
public string NpmrcEnvironmentVariablesSecretVersionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceCompilationOverridesInput`<sup>Optional</sup> <a name="WorkspaceCompilationOverridesInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.workspaceCompilationOverridesInput"></a>

```csharp
public GoogleDataformRepositoryWorkspaceCompilationOverrides WorkspaceCompilationOverridesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NpmrcEnvironmentVariablesSecretVersion`<sup>Required</sup> <a name="NpmrcEnvironmentVariablesSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.npmrcEnvironmentVariablesSecretVersion"></a>

```csharp
public string NpmrcEnvironmentVariablesSecretVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryConfig <a name="GoogleDataformRepositoryConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string DisplayName = null,
    GoogleDataformRepositoryGitRemoteSettings GitRemoteSettings = null,
    string Id = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string NpmrcEnvironmentVariablesSecretVersion = null,
    string Project = null,
    string Region = null,
    string ServiceAccount = null,
    GoogleDataformRepositoryTimeouts Timeouts = null,
    GoogleDataformRepositoryWorkspaceCompilationOverrides WorkspaceCompilationOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.name">Name</a></code> | <code>string</code> | The repository's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. The repository's user-friendly name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.gitRemoteSettings">GitRemoteSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | git_remote_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#id GoogleDataformRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion">NpmrcEnvironmentVariablesSecretVersion</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#project GoogleDataformRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.region">Region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account to run workflow invocations under. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.workspaceCompilationOverrides">WorkspaceCompilationOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | workspace_compilation_overrides block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The repository's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#name GoogleDataformRepository#name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. The repository's user-friendly name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#display_name GoogleDataformRepository#display_name}

---

##### `GitRemoteSettings`<sup>Optional</sup> <a name="GitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.gitRemoteSettings"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettings GitRemoteSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

git_remote_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#git_remote_settings GoogleDataformRepository#git_remote_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#id GoogleDataformRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Optional.

The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#kms_key_name GoogleDataformRepository#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Repository user labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#labels GoogleDataformRepository#labels}

---

##### `NpmrcEnvironmentVariablesSecretVersion`<sup>Optional</sup> <a name="NpmrcEnvironmentVariablesSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.npmrcEnvironmentVariablesSecretVersion"></a>

```csharp
public string NpmrcEnvironmentVariablesSecretVersion { get; set; }
```

- *Type:* string

Optional.

The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#npmrc_environment_variables_secret_version GoogleDataformRepository#npmrc_environment_variables_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#project GoogleDataformRepository#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#region GoogleDataformRepository#region}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#service_account GoogleDataformRepository#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.timeouts"></a>

```csharp
public GoogleDataformRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts">GoogleDataformRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#timeouts GoogleDataformRepository#timeouts}

---

##### `WorkspaceCompilationOverrides`<sup>Optional</sup> <a name="WorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryConfig.property.workspaceCompilationOverrides"></a>

```csharp
public GoogleDataformRepositoryWorkspaceCompilationOverrides WorkspaceCompilationOverrides { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

workspace_compilation_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#workspace_compilation_overrides GoogleDataformRepository#workspace_compilation_overrides}

---

### GoogleDataformRepositoryGitRemoteSettings <a name="GoogleDataformRepositoryGitRemoteSettings" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryGitRemoteSettings {
    string DefaultBranch,
    string Url,
    string AuthenticationTokenSecretVersion = null,
    GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig SshAuthenticationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | The Git remote's default branch name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.url">Url</a></code> | <code>string</code> | The Git remote's URL. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>string</code> | The name of the Secret Manager secret version to use as an authentication token for Git operations. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig">SshAuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | ssh_authentication_config block. |

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

The Git remote's default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#default_branch GoogleDataformRepository#default_branch}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The Git remote's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#url GoogleDataformRepository#url}

---

##### `AuthenticationTokenSecretVersion`<sup>Optional</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.authenticationTokenSecretVersion"></a>

```csharp
public string AuthenticationTokenSecretVersion { get; set; }
```

- *Type:* string

The name of the Secret Manager secret version to use as an authentication token for Git operations.

This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#authentication_token_secret_version GoogleDataformRepository#authentication_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `SshAuthenticationConfig`<sup>Optional</sup> <a name="SshAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings.property.sshAuthenticationConfig"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig SshAuthenticationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

ssh_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#ssh_authentication_config GoogleDataformRepository#ssh_authentication_config}

---

### GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig <a name="GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig {
    string HostPublicKey,
    string UserPrivateKeySecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey">HostPublicKey</a></code> | <code>string</code> | Content of a public SSH key to verify an identity of a remote Git host. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion">UserPrivateKeySecretVersion</a></code> | <code>string</code> | The name of the Secret Manager secret version to use as a ssh private key for Git operations. |

---

##### `HostPublicKey`<sup>Required</sup> <a name="HostPublicKey" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.hostPublicKey"></a>

```csharp
public string HostPublicKey { get; set; }
```

- *Type:* string

Content of a public SSH key to verify an identity of a remote Git host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#host_public_key GoogleDataformRepository#host_public_key}

---

##### `UserPrivateKeySecretVersion`<sup>Required</sup> <a name="UserPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig.property.userPrivateKeySecretVersion"></a>

```csharp
public string UserPrivateKeySecretVersion { get; set; }
```

- *Type:* string

The name of the Secret Manager secret version to use as a ssh private key for Git operations.

Must be in the format projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#user_private_key_secret_version GoogleDataformRepository#user_private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataformRepositoryTimeouts <a name="GoogleDataformRepositoryTimeouts" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#create GoogleDataformRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#delete GoogleDataformRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#update GoogleDataformRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#create GoogleDataformRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#delete GoogleDataformRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#update GoogleDataformRepository#update}.

---

### GoogleDataformRepositoryWorkspaceCompilationOverrides <a name="GoogleDataformRepositoryWorkspaceCompilationOverrides" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryWorkspaceCompilationOverrides {
    string DefaultDatabase = null,
    string SchemaSuffix = null,
    string TablePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase">DefaultDatabase</a></code> | <code>string</code> | The default database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix">SchemaSuffix</a></code> | <code>string</code> | The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | The prefix that should be prepended to all table names. |

---

##### `DefaultDatabase`<sup>Optional</sup> <a name="DefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.defaultDatabase"></a>

```csharp
public string DefaultDatabase { get; set; }
```

- *Type:* string

The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#default_database GoogleDataformRepository#default_database}

---

##### `SchemaSuffix`<sup>Optional</sup> <a name="SchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.schemaSuffix"></a>

```csharp
public string SchemaSuffix { get; set; }
```

- *Type:* string

The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#schema_suffix GoogleDataformRepository#schema_suffix}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; set; }
```

- *Type:* string

The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataform_repository#table_prefix GoogleDataformRepository#table_prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryGitRemoteSettingsOutputReference <a name="GoogleDataformRepositoryGitRemoteSettingsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryGitRemoteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig">PutSshAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion">ResetAuthenticationTokenSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig">ResetSshAuthenticationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSshAuthenticationConfig` <a name="PutSshAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig"></a>

```csharp
private void PutSshAuthenticationConfig(GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.putSshAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---

##### `ResetAuthenticationTokenSecretVersion` <a name="ResetAuthenticationTokenSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resetAuthenticationTokenSecretVersion"></a>

```csharp
private void ResetAuthenticationTokenSecretVersion()
```

##### `ResetSshAuthenticationConfig` <a name="ResetSshAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.resetSshAuthenticationConfig"></a>

```csharp
private void ResetSshAuthenticationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig">SshAuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus">TokenStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput">AuthenticationTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput">SshAuthenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion">AuthenticationTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SshAuthenticationConfig`<sup>Required</sup> <a name="SshAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfig"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference SshAuthenticationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference</a>

---

##### `TokenStatus`<sup>Required</sup> <a name="TokenStatus" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.tokenStatus"></a>

```csharp
public string TokenStatus { get; }
```

- *Type:* string

---

##### `AuthenticationTokenSecretVersionInput`<sup>Optional</sup> <a name="AuthenticationTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersionInput"></a>

```csharp
public string AuthenticationTokenSecretVersionInput { get; }
```

- *Type:* string

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `SshAuthenticationConfigInput`<sup>Optional</sup> <a name="SshAuthenticationConfigInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.sshAuthenticationConfigInput"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig SshAuthenticationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AuthenticationTokenSecretVersion`<sup>Required</sup> <a name="AuthenticationTokenSecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.authenticationTokenSecretVersion"></a>

```csharp
public string AuthenticationTokenSecretVersion { get; }
```

- *Type:* string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettings">GoogleDataformRepositoryGitRemoteSettings</a>

---


### GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference <a name="GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput">HostPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput">UserPrivateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey">HostPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion">UserPrivateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostPublicKeyInput`<sup>Optional</sup> <a name="HostPublicKeyInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKeyInput"></a>

```csharp
public string HostPublicKeyInput { get; }
```

- *Type:* string

---

##### `UserPrivateKeySecretVersionInput`<sup>Optional</sup> <a name="UserPrivateKeySecretVersionInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersionInput"></a>

```csharp
public string UserPrivateKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `HostPublicKey`<sup>Required</sup> <a name="HostPublicKey" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.hostPublicKey"></a>

```csharp
public string HostPublicKey { get; }
```

- *Type:* string

---

##### `UserPrivateKeySecretVersion`<sup>Required</sup> <a name="UserPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.userPrivateKeySecretVersion"></a>

```csharp
public string UserPrivateKeySecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig">GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig</a>

---


### GoogleDataformRepositoryTimeoutsOutputReference <a name="GoogleDataformRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference <a name="GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase">ResetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix">ResetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultDatabase` <a name="ResetDefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetDefaultDatabase"></a>

```csharp
private void ResetDefaultDatabase()
```

##### `ResetSchemaSuffix` <a name="ResetSchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetSchemaSuffix"></a>

```csharp
private void ResetSchemaSuffix()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.resetTablePrefix"></a>

```csharp
private void ResetTablePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput">DefaultDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput">SchemaSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput">TablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase">DefaultDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix">SchemaSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultDatabaseInput`<sup>Optional</sup> <a name="DefaultDatabaseInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabaseInput"></a>

```csharp
public string DefaultDatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaSuffixInput`<sup>Optional</sup> <a name="SchemaSuffixInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffixInput"></a>

```csharp
public string SchemaSuffixInput { get; }
```

- *Type:* string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefixInput"></a>

```csharp
public string TablePrefixInput { get; }
```

- *Type:* string

---

##### `DefaultDatabase`<sup>Required</sup> <a name="DefaultDatabase" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.defaultDatabase"></a>

```csharp
public string DefaultDatabase { get; }
```

- *Type:* string

---

##### `SchemaSuffix`<sup>Required</sup> <a name="SchemaSuffix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.schemaSuffix"></a>

```csharp
public string SchemaSuffix { get; }
```

- *Type:* string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference.property.internalValue"></a>

```csharp
public GoogleDataformRepositoryWorkspaceCompilationOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepository.GoogleDataformRepositoryWorkspaceCompilationOverrides">GoogleDataformRepositoryWorkspaceCompilationOverrides</a>

---



