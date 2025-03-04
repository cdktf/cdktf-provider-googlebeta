# `googleEventarcGoogleChannelConfig` Submodule <a name="`googleEventarcGoogleChannelConfig` Submodule" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcGoogleChannelConfig <a name="GoogleEventarcGoogleChannelConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config google_eventarc_google_channel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEventarcGoogleChannelConfig(Construct Scope, string Id, GoogleEventarcGoogleChannelConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig">GoogleEventarcGoogleChannelConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig">GoogleEventarcGoogleChannelConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEventarcGoogleChannelConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

---

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName"></a>

```csharp
private void ResetCryptoKeyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEventarcGoogleChannelConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEventarcGoogleChannelConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEventarcGoogleChannelConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEventarcGoogleChannelConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEventarcGoogleChannelConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEventarcGoogleChannelConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcGoogleChannelConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts"></a>

```csharp
public GoogleEventarcGoogleChannelConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput"></a>

```csharp
public string CryptoKeyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcGoogleChannelConfigConfig <a name="GoogleEventarcGoogleChannelConfigConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEventarcGoogleChannelConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string CryptoKeyName = null,
    string Id = null,
    string Project = null,
    GoogleEventarcGoogleChannelConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name">Name</a></code> | <code>string</code> | Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#location GoogleEventarcGoogleChannelConfig#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#name GoogleEventarcGoogleChannelConfig#name}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; set; }
```

- *Type:* string

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#crypto_key_name GoogleEventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts"></a>

```csharp
public GoogleEventarcGoogleChannelConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#timeouts GoogleEventarcGoogleChannelConfig#timeouts}

---

### GoogleEventarcGoogleChannelConfigTimeouts <a name="GoogleEventarcGoogleChannelConfigTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEventarcGoogleChannelConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcGoogleChannelConfigTimeoutsOutputReference <a name="GoogleEventarcGoogleChannelConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEventarcGoogleChannelConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



