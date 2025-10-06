# `googleDeveloperConnectInsightsConfig` Submodule <a name="`googleDeveloperConnectInsightsConfig` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectInsightsConfig <a name="GoogleDeveloperConnectInsightsConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config google_developer_connect_insights_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfig(Construct Scope, string Id, GoogleDeveloperConnectInsightsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig">GoogleDeveloperConnectInsightsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig">GoogleDeveloperConnectInsightsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs">PutArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs">ResetArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactConfigs` <a name="PutArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs"></a>

```csharp
private void PutArtifactConfigs(IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDeveloperConnectInsightsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetArtifactConfigs` <a name="ResetArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs"></a>

```csharp
private void ResetArtifactConfigs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectInsightsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectInsightsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectInsightsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeveloperConnectInsightsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectInsightsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectInsightsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectInsightsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs">ArtifactConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs">RuntimeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput">AppHubApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput">ArtifactConfigsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput">InsightsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication">AppHubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId">InsightsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ArtifactConfigs`<sup>Required</sup> <a name="ArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsList ArtifactConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RuntimeConfigs`<sup>Required</sup> <a name="RuntimeConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigsList RuntimeConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppHubApplicationInput`<sup>Optional</sup> <a name="AppHubApplicationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput"></a>

```csharp
public string AppHubApplicationInput { get; }
```

- *Type:* string

---

##### `ArtifactConfigsInput`<sup>Optional</sup> <a name="ArtifactConfigsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsightsConfigIdInput`<sup>Optional</sup> <a name="InsightsConfigIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput"></a>

```csharp
public string InsightsConfigIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppHubApplication`<sup>Required</sup> <a name="AppHubApplication" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication"></a>

```csharp
public string AppHubApplication { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsightsConfigId`<sup>Required</sup> <a name="InsightsConfigId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId"></a>

```csharp
public string InsightsConfigId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigs <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigs {
    GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysis = null,
    GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistry = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis">GoogleArtifactAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | google_artifact_analysis block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry">GoogleArtifactRegistry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | google_artifact_registry block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri">Uri</a></code> | <code>string</code> | The URI of the artifact that is deployed. |

---

##### `GoogleArtifactAnalysis`<sup>Optional</sup> <a name="GoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysis { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

google_artifact_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#google_artifact_analysis GoogleDeveloperConnectInsightsConfig#google_artifact_analysis}

---

##### `GoogleArtifactRegistry`<sup>Optional</sup> <a name="GoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistry { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

google_artifact_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#google_artifact_registry GoogleDeveloperConnectInsightsConfig#google_artifact_registry}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the artifact that is deployed.

e.g. 'us-docker.pkg.dev/my-project/my-repo/image'.
The URI does not include the tag / digest because it captures a lineage of
artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#uri GoogleDeveloperConnectInsightsConfig#uri}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis {
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId">ProjectId</a></code> | <code>string</code> | The project id of the project where the provenance is stored. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project id of the project where the provenance is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry {
    string ArtifactRegistryPackage,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage">ArtifactRegistryPackage</a></code> | <code>string</code> | The name of the artifact registry package. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId">ProjectId</a></code> | <code>string</code> | The host project of Artifact Registry. |

---

##### `ArtifactRegistryPackage`<sup>Required</sup> <a name="ArtifactRegistryPackage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage"></a>

```csharp
public string ArtifactRegistryPackage { get; set; }
```

- *Type:* string

The name of the artifact registry package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_registry_package GoogleDeveloperConnectInsightsConfig#artifact_registry_package}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The host project of Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigConfig <a name="GoogleDeveloperConnectInsightsConfigConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppHubApplication,
    string InsightsConfigId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigs = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDeveloperConnectInsightsConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication">AppHubApplication</a></code> | <code>string</code> | The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId">InsightsConfigId</a></code> | <code>string</code> | ID of the requesting InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs">ArtifactConfigs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | artifact_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with an InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AppHubApplication`<sup>Required</sup> <a name="AppHubApplication" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication"></a>

```csharp
public string AppHubApplication { get; set; }
```

- *Type:* string

The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#app_hub_application GoogleDeveloperConnectInsightsConfig#app_hub_application}

---

##### `InsightsConfigId`<sup>Required</sup> <a name="InsightsConfigId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId"></a>

```csharp
public string InsightsConfigId { get; set; }
```

- *Type:* string

ID of the requesting InsightsConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#insights_config_id GoogleDeveloperConnectInsightsConfig#insights_config_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#location GoogleDeveloperConnectInsightsConfig#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#annotations GoogleDeveloperConnectInsightsConfig#annotations}

---

##### `ArtifactConfigs`<sup>Optional</sup> <a name="ArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

artifact_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_configs GoogleDeveloperConnectInsightsConfig#artifact_configs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with an InsightsConfig.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#labels GoogleDeveloperConnectInsightsConfig#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#timeouts GoogleDeveloperConnectInsightsConfig#timeouts}

---

### GoogleDeveloperConnectInsightsConfigErrors <a name="GoogleDeveloperConnectInsightsConfigErrors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrors {

};
```


### GoogleDeveloperConnectInsightsConfigErrorsDetails <a name="GoogleDeveloperConnectInsightsConfigErrorsDetails" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrorsDetails {

};
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigs <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigs {

};
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload {

};
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload {

};
```


### GoogleDeveloperConnectInsightsConfigTimeouts <a name="GoogleDeveloperConnectInsightsConfigTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput">ArtifactRegistryPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage">ArtifactRegistryPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactRegistryPackageInput`<sup>Optional</sup> <a name="ArtifactRegistryPackageInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput"></a>

```csharp
public string ArtifactRegistryPackageInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ArtifactRegistryPackage`<sup>Required</sup> <a name="ArtifactRegistryPackage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage"></a>

```csharp
public string ArtifactRegistryPackage { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsList <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>[]

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis">PutGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry">PutGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis">ResetGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry">ResetGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleArtifactAnalysis` <a name="PutGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis"></a>

```csharp
private void PutGoogleArtifactAnalysis(GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `PutGoogleArtifactRegistry` <a name="PutGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry"></a>

```csharp
private void PutGoogleArtifactRegistry(GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `ResetGoogleArtifactAnalysis` <a name="ResetGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis"></a>

```csharp
private void ResetGoogleArtifactAnalysis()
```

##### `ResetGoogleArtifactRegistry` <a name="ResetGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry"></a>

```csharp
private void ResetGoogleArtifactRegistry()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis">GoogleArtifactAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry">GoogleArtifactRegistry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput">GoogleArtifactAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput">GoogleArtifactRegistryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleArtifactAnalysis`<sup>Required</sup> <a name="GoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference GoogleArtifactAnalysis { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a>

---

##### `GoogleArtifactRegistry`<sup>Required</sup> <a name="GoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference GoogleArtifactRegistry { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a>

---

##### `GoogleArtifactAnalysisInput`<sup>Optional</sup> <a name="GoogleArtifactAnalysisInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysisInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `GoogleArtifactRegistryInput`<sup>Optional</sup> <a name="GoogleArtifactRegistryInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigArtifactConfigs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsList <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrorsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage">DetailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailMessage`<sup>Required</sup> <a name="DetailMessage" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage"></a>

```csharp
public string DetailMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigErrorsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsList <a name="GoogleDeveloperConnectInsightsConfigErrorsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigErrorsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigErrorsDetailsList Details { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality">Criticality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload">Workload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality"></a>

```csharp
public string Criticality { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Workload`<sup>Required</sup> <a name="Workload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload"></a>

```csharp
public string Workload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment">Deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment"></a>

```csharp
public string Deployment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get"></a>

```csharp
private GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload">AppHubWorkload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload">GkeWorkload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppHubWorkload`<sup>Required</sup> <a name="AppHubWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList AppHubWorkload { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a>

---

##### `GkeWorkload`<sup>Required</sup> <a name="GkeWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList GkeWorkload { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue"></a>

```csharp
public GoogleDeveloperConnectInsightsConfigRuntimeConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference <a name="GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDeveloperConnectInsightsConfigTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---



