# `googleAppEngineServiceNetworkSettings` Submodule <a name="`googleAppEngineServiceNetworkSettings` Submodule" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineServiceNetworkSettings <a name="GoogleAppEngineServiceNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettings(Construct Scope, string Id, GoogleAppEngineServiceNetworkSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings">PutNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkSettings` <a name="PutNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings"></a>

```csharp
private void PutNetworkSettings(GoogleAppEngineServiceNetworkSettingsNetworkSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAppEngineServiceNetworkSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineServiceNetworkSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineServiceNetworkSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineServiceNetworkSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineServiceNetworkSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineServiceNetworkSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineServiceNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineServiceNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput">NetworkSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference NetworkSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkSettingsInput`<sup>Optional</sup> <a name="NetworkSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsNetworkSettings NetworkSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineServiceNetworkSettingsConfig <a name="GoogleAppEngineServiceNetworkSettingsConfig" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleAppEngineServiceNetworkSettingsNetworkSettings NetworkSettings,
    string Service,
    string Id = null,
    string Project = null,
    GoogleAppEngineServiceNetworkSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service">Service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsNetworkSettings NetworkSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#network_settings GoogleAppEngineServiceNetworkSettings#network_settings}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#service GoogleAppEngineServiceNetworkSettings#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#timeouts GoogleAppEngineServiceNetworkSettings#timeouts}

---

### GoogleAppEngineServiceNetworkSettingsNetworkSettings <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettingsNetworkSettings {
    string IngressTrafficAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>string</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `IngressTrafficAllowed`<sup>Optional</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```csharp
public string IngressTrafficAllowed { get; set; }
```

- *Type:* string

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#ingress_traffic_allowed GoogleAppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### GoogleAppEngineServiceNetworkSettingsTimeouts <a name="GoogleAppEngineServiceNetworkSettingsTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">ResetIngressTrafficAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngressTrafficAllowed` <a name="ResetIngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```csharp
private void ResetIngressTrafficAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">IngressTrafficAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressTrafficAllowedInput`<sup>Optional</sup> <a name="IngressTrafficAllowedInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```csharp
public string IngressTrafficAllowedInput { get; }
```

- *Type:* string

---

##### `IngressTrafficAllowed`<sup>Required</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```csharp
public string IngressTrafficAllowed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineServiceNetworkSettingsNetworkSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---


### GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



