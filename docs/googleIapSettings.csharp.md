# `googleIapSettings` Submodule <a name="`googleIapSettings` Submodule" id="@cdktf/provider-google-beta.googleIapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapSettings <a name="GoogleIapSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettings(Construct Scope, string Id, GoogleIapSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings">PutAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings">ResetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessSettings` <a name="PutAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings"></a>

```csharp
private void PutAccessSettings(GoogleIapSettingsAccessSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings"></a>

```csharp
private void PutApplicationSettings(GoogleIapSettingsApplicationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIapSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `ResetAccessSettings` <a name="ResetAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings"></a>

```csharp
private void ResetAccessSettings()
```

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings"></a>

```csharp
private void ResetApplicationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput">AccessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessSettings`<sup>Required</sup> <a name="AccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsOutputReference AccessSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts"></a>

```csharp
public GoogleIapSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a>

---

##### `AccessSettingsInput`<sup>Optional</sup> <a name="AccessSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettings AccessSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput"></a>

```csharp
public GoogleIapSettingsApplicationSettings ApplicationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapSettingsAccessSettings <a name="GoogleIapSettingsAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettings {
    GoogleIapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettings = null,
    GoogleIapSettingsAccessSettingsCorsSettings CorsSettings = null,
    GoogleIapSettingsAccessSettingsGcipSettings GcipSettings = null,
    string[] IdentitySources = null,
    GoogleIapSettingsAccessSettingsOauthSettings OauthSettings = null,
    GoogleIapSettingsAccessSettingsReauthSettings ReauthSettings = null,
    GoogleIapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources">IdentitySources</a></code> | <code>string[]</code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `AllowedDomainsSettings`<sup>Optional</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#allowed_domains_settings GoogleIapSettings#allowed_domains_settings}

---

##### `CorsSettings`<sup>Optional</sup> <a name="CorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsCorsSettings CorsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#cors_settings GoogleIapSettings#cors_settings}

---

##### `GcipSettings`<sup>Optional</sup> <a name="GcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsGcipSettings GcipSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#gcip_settings GoogleIapSettings#gcip_settings}

---

##### `IdentitySources`<sup>Optional</sup> <a name="IdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources"></a>

```csharp
public string[] IdentitySources { get; set; }
```

- *Type:* string[]

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#identity_sources GoogleIapSettings#identity_sources}

---

##### `OauthSettings`<sup>Optional</sup> <a name="OauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsOauthSettings OauthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#oauth_settings GoogleIapSettings#oauth_settings}

---

##### `ReauthSettings`<sup>Optional</sup> <a name="ReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsReauthSettings ReauthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#reauth_settings GoogleIapSettings#reauth_settings}

---

##### `WorkforceIdentitySettings`<sup>Optional</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#workforce_identity_settings GoogleIapSettings#workforce_identity_settings}

---

### GoogleIapSettingsAccessSettingsAllowedDomainsSettings <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsAllowedDomainsSettings {
    string[] Domains = null,
    object Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains">Domains</a></code> | <code>string[]</code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable">Enable</a></code> | <code>object</code> | Configuration for customers to opt in for the feature. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#domains GoogleIapSettings#domains}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

### GoogleIapSettingsAccessSettingsCorsSettings <a name="GoogleIapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsCorsSettings {
    object AllowHttpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>object</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `AllowHttpOptions`<sup>Optional</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```csharp
public object AllowHttpOptions { get; set; }
```

- *Type:* object

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#allow_http_options GoogleIapSettings#allow_http_options}

---

### GoogleIapSettingsAccessSettingsGcipSettings <a name="GoogleIapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsGcipSettings {
    string LoginPageUri = null,
    string[] TenantIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri">LoginPageUri</a></code> | <code>string</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds">TenantIds</a></code> | <code>string[]</code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `LoginPageUri`<sup>Optional</sup> <a name="LoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```csharp
public string LoginPageUri { get; set; }
```

- *Type:* string

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#login_page_uri GoogleIapSettings#login_page_uri}

---

##### `TenantIds`<sup>Optional</sup> <a name="TenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```csharp
public string[] TenantIds { get; set; }
```

- *Type:* string[]

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#tenant_ids GoogleIapSettings#tenant_ids}

---

### GoogleIapSettingsAccessSettingsOauthSettings <a name="GoogleIapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsOauthSettings {
    string LoginHint = null,
    string[] ProgrammaticClients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint">LoginHint</a></code> | <code>string</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients">ProgrammaticClients</a></code> | <code>string[]</code> | List of client ids allowed to use IAP programmatically. |

---

##### `LoginHint`<sup>Optional</sup> <a name="LoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```csharp
public string LoginHint { get; set; }
```

- *Type:* string

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#login_hint GoogleIapSettings#login_hint}

---

##### `ProgrammaticClients`<sup>Optional</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```csharp
public string[] ProgrammaticClients { get; set; }
```

- *Type:* string[]

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#programmatic_clients GoogleIapSettings#programmatic_clients}

---

### GoogleIapSettingsAccessSettingsReauthSettings <a name="GoogleIapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsReauthSettings {
    string MaxAge,
    string Method,
    string PolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge">MaxAge</a></code> | <code>string</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method">Method</a></code> | <code>string</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType">PolicyType</a></code> | <code>string</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```csharp
public string MaxAge { get; set; }
```

- *Type:* string

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#max_age GoogleIapSettings#max_age}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#method GoogleIapSettings#method}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#policy_type GoogleIapSettings#policy_type}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettings <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettings {
    GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2 = null,
    string[] WorkforcePools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">WorkforcePools</a></code> | <code>string[]</code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `Oauth2`<sup>Optional</sup> <a name="Oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#oauth2 GoogleIapSettings#oauth2}

---

##### `WorkforcePools`<sup>Optional</sup> <a name="WorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```csharp
public string[] WorkforcePools { get; set; }
```

- *Type:* string[]

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#workforce_pools GoogleIapSettings#workforce_pools}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 {
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#client_id GoogleIapSettings#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#client_secret GoogleIapSettings#client_secret}

---

### GoogleIapSettingsApplicationSettings <a name="GoogleIapSettingsApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettings {
    GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettings = null,
    GoogleIapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettings = null,
    string CookieDomain = null,
    GoogleIapSettingsApplicationSettingsCsmSettings CsmSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain">CookieDomain</a></code> | <code>string</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `AccessDeniedPageSettings`<sup>Optional</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#access_denied_page_settings GoogleIapSettings#access_denied_page_settings}

---

##### `AttributePropagationSettings`<sup>Optional</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#attribute_propagation_settings GoogleIapSettings#attribute_propagation_settings}

---

##### `CookieDomain`<sup>Optional</sup> <a name="CookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain"></a>

```csharp
public string CookieDomain { get; set; }
```

- *Type:* string

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#cookie_domain GoogleIapSettings#cookie_domain}

---

##### `CsmSettings`<sup>Optional</sup> <a name="CsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsCsmSettings CsmSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#csm_settings GoogleIapSettings#csm_settings}

---

### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings {
    string AccessDeniedPageUri = null,
    object GenerateTroubleshootingUri = null,
    object RemediationTokenGenerationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>string</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>object</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>object</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `AccessDeniedPageUri`<sup>Optional</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```csharp
public string AccessDeniedPageUri { get; set; }
```

- *Type:* string

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#access_denied_page_uri GoogleIapSettings#access_denied_page_uri}

---

##### `GenerateTroubleshootingUri`<sup>Optional</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```csharp
public object GenerateTroubleshootingUri { get; set; }
```

- *Type:* object

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#generate_troubleshooting_uri GoogleIapSettings#generate_troubleshooting_uri}

---

##### `RemediationTokenGenerationEnabled`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```csharp
public object RemediationTokenGenerationEnabled { get; set; }
```

- *Type:* object

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#remediation_token_generation_enabled GoogleIapSettings#remediation_token_generation_enabled}

---

### GoogleIapSettingsApplicationSettingsAttributePropagationSettings <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsAttributePropagationSettings {
    object Enable = null,
    string Expression = null,
    string[] OutputCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable">Enable</a></code> | <code>object</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression">Expression</a></code> | <code>string</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">OutputCredentials</a></code> | <code>string[]</code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#expression GoogleIapSettings#expression}

---

##### `OutputCredentials`<sup>Optional</sup> <a name="OutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```csharp
public string[] OutputCredentials { get; set; }
```

- *Type:* string[]

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#output_credentials GoogleIapSettings#output_credentials}

---

### GoogleIapSettingsApplicationSettingsCsmSettings <a name="GoogleIapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsCsmSettings {
    string RctokenAud = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud">RctokenAud</a></code> | <code>string</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `RctokenAud`<sup>Optional</sup> <a name="RctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```csharp
public string RctokenAud { get; set; }
```

- *Type:* string

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#rctoken_aud GoogleIapSettings#rctoken_aud}

---

### GoogleIapSettingsConfig <a name="GoogleIapSettingsConfig" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleIapSettingsAccessSettings AccessSettings = null,
    GoogleIapSettingsApplicationSettings ApplicationSettings = null,
    string Id = null,
    GoogleIapSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#id GoogleIapSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#name GoogleIapSettings#name}

---

##### `AccessSettings`<sup>Optional</sup> <a name="AccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings"></a>

```csharp
public GoogleIapSettingsAccessSettings AccessSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettings ApplicationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#id GoogleIapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts"></a>

```csharp
public GoogleIapSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}

---

### GoogleIapSettingsTimeouts <a name="GoogleIapSettingsTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#create GoogleIapSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#update GoogleIapSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#create GoogleIapSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_iap_settings#update GoogleIapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### GoogleIapSettingsAccessSettingsCorsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsCorsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">ResetAllowHttpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowHttpOptions` <a name="ResetAllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```csharp
private void ResetAllowHttpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">AllowHttpOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowHttpOptionsInput`<sup>Optional</sup> <a name="AllowHttpOptionsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```csharp
public object AllowHttpOptionsInput { get; }
```

- *Type:* object

---

##### `AllowHttpOptions`<sup>Required</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```csharp
public object AllowHttpOptions { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsCorsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---


### GoogleIapSettingsAccessSettingsGcipSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsGcipSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">ResetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">ResetTenantIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginPageUri` <a name="ResetLoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```csharp
private void ResetLoginPageUri()
```

##### `ResetTenantIds` <a name="ResetTenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```csharp
private void ResetTenantIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">LoginPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">TenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">LoginPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">TenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginPageUriInput`<sup>Optional</sup> <a name="LoginPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```csharp
public string LoginPageUriInput { get; }
```

- *Type:* string

---

##### `TenantIdsInput`<sup>Optional</sup> <a name="TenantIdsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```csharp
public string[] TenantIdsInput { get; }
```

- *Type:* string[]

---

##### `LoginPageUri`<sup>Required</sup> <a name="LoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```csharp
public string LoginPageUri { get; }
```

- *Type:* string

---

##### `TenantIds`<sup>Required</sup> <a name="TenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```csharp
public string[] TenantIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsGcipSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---


### GoogleIapSettingsAccessSettingsOauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsOauthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">ResetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">ResetProgrammaticClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginHint` <a name="ResetLoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```csharp
private void ResetLoginHint()
```

##### `ResetProgrammaticClients` <a name="ResetProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```csharp
private void ResetProgrammaticClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">LoginHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">ProgrammaticClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">LoginHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">ProgrammaticClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginHintInput`<sup>Optional</sup> <a name="LoginHintInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```csharp
public string LoginHintInput { get; }
```

- *Type:* string

---

##### `ProgrammaticClientsInput`<sup>Optional</sup> <a name="ProgrammaticClientsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```csharp
public string[] ProgrammaticClientsInput { get; }
```

- *Type:* string[]

---

##### `LoginHint`<sup>Required</sup> <a name="LoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```csharp
public string LoginHint { get; }
```

- *Type:* string

---

##### `ProgrammaticClients`<sup>Required</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```csharp
public string[] ProgrammaticClients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsOauthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---


### GoogleIapSettingsAccessSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">PutAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings">PutCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings">PutGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings">PutOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings">PutReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">PutWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">ResetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings">ResetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings">ResetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources">ResetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings">ResetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings">ResetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">ResetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedDomainsSettings` <a name="PutAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```csharp
private void PutAllowedDomainsSettings(GoogleIapSettingsAccessSettingsAllowedDomainsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `PutCorsSettings` <a name="PutCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```csharp
private void PutCorsSettings(GoogleIapSettingsAccessSettingsCorsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `PutGcipSettings` <a name="PutGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```csharp
private void PutGcipSettings(GoogleIapSettingsAccessSettingsGcipSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `PutOauthSettings` <a name="PutOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```csharp
private void PutOauthSettings(GoogleIapSettingsAccessSettingsOauthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `PutReauthSettings` <a name="PutReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```csharp
private void PutReauthSettings(GoogleIapSettingsAccessSettingsReauthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `PutWorkforceIdentitySettings` <a name="PutWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```csharp
private void PutWorkforceIdentitySettings(GoogleIapSettingsAccessSettingsWorkforceIdentitySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `ResetAllowedDomainsSettings` <a name="ResetAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```csharp
private void ResetAllowedDomainsSettings()
```

##### `ResetCorsSettings` <a name="ResetCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```csharp
private void ResetCorsSettings()
```

##### `ResetGcipSettings` <a name="ResetGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```csharp
private void ResetGcipSettings()
```

##### `ResetIdentitySources` <a name="ResetIdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```csharp
private void ResetIdentitySources()
```

##### `ResetOauthSettings` <a name="ResetOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```csharp
private void ResetOauthSettings()
```

##### `ResetReauthSettings` <a name="ResetReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```csharp
private void ResetReauthSettings()
```

##### `ResetWorkforceIdentitySettings` <a name="ResetWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```csharp
private void ResetWorkforceIdentitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">AllowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput">CorsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">GcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput">IdentitySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">OauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">ReauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">WorkforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources">IdentitySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedDomainsSettings`<sup>Required</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference AllowedDomainsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `CorsSettings`<sup>Required</sup> <a name="CorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsCorsSettingsOutputReference CorsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `GcipSettings`<sup>Required</sup> <a name="GcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsGcipSettingsOutputReference GcipSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `OauthSettings`<sup>Required</sup> <a name="OauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsOauthSettingsOutputReference OauthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `ReauthSettings`<sup>Required</sup> <a name="ReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsReauthSettingsOutputReference ReauthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `WorkforceIdentitySettings`<sup>Required</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference WorkforceIdentitySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `AllowedDomainsSettingsInput`<sup>Optional</sup> <a name="AllowedDomainsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `CorsSettingsInput`<sup>Optional</sup> <a name="CorsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsCorsSettings CorsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `GcipSettingsInput`<sup>Optional</sup> <a name="GcipSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsGcipSettings GcipSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `IdentitySourcesInput`<sup>Optional</sup> <a name="IdentitySourcesInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```csharp
public string[] IdentitySourcesInput { get; }
```

- *Type:* string[]

---

##### `OauthSettingsInput`<sup>Optional</sup> <a name="OauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsOauthSettings OauthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `ReauthSettingsInput`<sup>Optional</sup> <a name="ReauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsReauthSettings ReauthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `WorkforceIdentitySettingsInput`<sup>Optional</sup> <a name="WorkforceIdentitySettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `IdentitySources`<sup>Required</sup> <a name="IdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```csharp
public string[] IdentitySources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---


### GoogleIapSettingsAccessSettingsReauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsReauthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">MaxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```csharp
public string MaxAgeInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```csharp
public string MaxAge { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsReauthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecretSha256`<sup>Required</sup> <a name="ClientSecretSha256" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```csharp
public string ClientSecretSha256 { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">PutOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">ResetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">ResetWorkforcePools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2` <a name="PutOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```csharp
private void PutOauth2(GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `ResetOauth2` <a name="ResetOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```csharp
private void ResetOauth2()
```

##### `ResetWorkforcePools` <a name="ResetWorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```csharp
private void ResetWorkforcePools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">Oauth2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">WorkforcePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">WorkforcePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth2`<sup>Required</sup> <a name="Oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference Oauth2 { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `Oauth2Input`<sup>Optional</sup> <a name="Oauth2Input" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `WorkforcePoolsInput`<sup>Optional</sup> <a name="WorkforcePoolsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```csharp
public string[] WorkforcePoolsInput { get; }
```

- *Type:* string[]

---

##### `WorkforcePools`<sup>Required</sup> <a name="WorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```csharp
public string[] WorkforcePools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">ResetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">ResetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">ResetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDeniedPageUri` <a name="ResetAccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```csharp
private void ResetAccessDeniedPageUri()
```

##### `ResetGenerateTroubleshootingUri` <a name="ResetGenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```csharp
private void ResetGenerateTroubleshootingUri()
```

##### `ResetRemediationTokenGenerationEnabled` <a name="ResetRemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```csharp
private void ResetRemediationTokenGenerationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">AccessDeniedPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">GenerateTroubleshootingUriInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">RemediationTokenGenerationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDeniedPageUriInput`<sup>Optional</sup> <a name="AccessDeniedPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```csharp
public string AccessDeniedPageUriInput { get; }
```

- *Type:* string

---

##### `GenerateTroubleshootingUriInput`<sup>Optional</sup> <a name="GenerateTroubleshootingUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```csharp
public object GenerateTroubleshootingUriInput { get; }
```

- *Type:* object

---

##### `RemediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabledInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```csharp
public object RemediationTokenGenerationEnabledInput { get; }
```

- *Type:* object

---

##### `AccessDeniedPageUri`<sup>Required</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```csharp
public string AccessDeniedPageUri { get; }
```

- *Type:* string

---

##### `GenerateTroubleshootingUri`<sup>Required</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```csharp
public object GenerateTroubleshootingUri { get; }
```

- *Type:* object

---

##### `RemediationTokenGenerationEnabled`<sup>Required</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```csharp
public object RemediationTokenGenerationEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">ResetOutputCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetOutputCredentials` <a name="ResetOutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```csharp
private void ResetOutputCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">OutputCredentialsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">OutputCredentials</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `OutputCredentialsInput`<sup>Optional</sup> <a name="OutputCredentialsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```csharp
public string[] OutputCredentialsInput { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `OutputCredentials`<sup>Required</sup> <a name="OutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```csharp
public string[] OutputCredentials { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">ResetRctokenAud</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRctokenAud` <a name="ResetRctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```csharp
private void ResetRctokenAud()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">RctokenAudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">RctokenAud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RctokenAudInput`<sup>Optional</sup> <a name="RctokenAudInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```csharp
public string RctokenAudInput { get; }
```

- *Type:* string

---

##### `RctokenAud`<sup>Required</sup> <a name="RctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```csharp
public string RctokenAud { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsApplicationSettingsCsmSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---


### GoogleIapSettingsApplicationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">PutAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">PutAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings">PutCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">ResetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">ResetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain">ResetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings">ResetCsmSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessDeniedPageSettings` <a name="PutAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```csharp
private void PutAccessDeniedPageSettings(GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `PutAttributePropagationSettings` <a name="PutAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```csharp
private void PutAttributePropagationSettings(GoogleIapSettingsApplicationSettingsAttributePropagationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `PutCsmSettings` <a name="PutCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```csharp
private void PutCsmSettings(GoogleIapSettingsApplicationSettingsCsmSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `ResetAccessDeniedPageSettings` <a name="ResetAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```csharp
private void ResetAccessDeniedPageSettings()
```

##### `ResetAttributePropagationSettings` <a name="ResetAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```csharp
private void ResetAttributePropagationSettings()
```

##### `ResetCookieDomain` <a name="ResetCookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```csharp
private void ResetCookieDomain()
```

##### `ResetCsmSettings` <a name="ResetCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```csharp
private void ResetCsmSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">AccessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">AttributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">CookieDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">CsmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain">CookieDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDeniedPageSettings`<sup>Required</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference AccessDeniedPageSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `AttributePropagationSettings`<sup>Required</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference AttributePropagationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `CsmSettings`<sup>Required</sup> <a name="CsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```csharp
public GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference CsmSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `AccessDeniedPageSettingsInput`<sup>Optional</sup> <a name="AccessDeniedPageSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `AttributePropagationSettingsInput`<sup>Optional</sup> <a name="AttributePropagationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```csharp
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `CookieDomainInput`<sup>Optional</sup> <a name="CookieDomainInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```csharp
public string CookieDomainInput { get; }
```

- *Type:* string

---

##### `CsmSettingsInput`<sup>Optional</sup> <a name="CsmSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```csharp
public GoogleIapSettingsApplicationSettingsCsmSettings CsmSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `CookieDomain`<sup>Required</sup> <a name="CookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```csharp
public string CookieDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleIapSettingsApplicationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---


### GoogleIapSettingsTimeoutsOutputReference <a name="GoogleIapSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



