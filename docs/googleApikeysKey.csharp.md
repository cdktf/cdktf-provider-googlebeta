# `googleApikeysKey` Submodule <a name="`googleApikeysKey` Submodule" id="@cdktf/provider-google-beta.googleApikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApikeysKey <a name="GoogleApikeysKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKey(Construct Scope, string Id, GoogleApikeysKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig">GoogleApikeysKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig">GoogleApikeysKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetRestrictions">ResetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions"></a>

```csharp
private void PutRestrictions(GoogleApikeysKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApikeysKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetRestrictions"></a>

```csharp
private void ResetRestrictions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApikeysKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApikeysKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApikeysKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApikeysKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApikeysKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApikeysKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApikeysKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApikeysKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApikeysKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.keyString">KeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference">GoogleApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyString`<sup>Required</sup> <a name="KeyString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.keyString"></a>

```csharp
public string KeyString { get; }
```

- *Type:* string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeouts"></a>

```csharp
public GoogleApikeysKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference">GoogleApikeysKeyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.restrictionsInput"></a>

```csharp
public GoogleApikeysKeyRestrictions RestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApikeysKeyConfig <a name="GoogleApikeysKeyConfig" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleApikeysKeyRestrictions Restrictions = null,
    GoogleApikeysKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#name GoogleApikeysKey#name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#display_name GoogleApikeysKey#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#project GoogleApikeysKey#project}

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.restrictions"></a>

```csharp
public GoogleApikeysKeyRestrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#restrictions GoogleApikeysKey#restrictions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyConfig.property.timeouts"></a>

```csharp
public GoogleApikeysKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts">GoogleApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#timeouts GoogleApikeysKey#timeouts}

---

### GoogleApikeysKeyRestrictions <a name="GoogleApikeysKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictions {
    GoogleApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictions = null,
    object ApiTargets = null,
    GoogleApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictions = null,
    GoogleApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictions = null,
    GoogleApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.apiTargets">ApiTargets</a></code> | <code>object</code> | api_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `AndroidKeyRestrictions`<sup>Optional</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#android_key_restrictions GoogleApikeysKey#android_key_restrictions}

---

##### `ApiTargets`<sup>Optional</sup> <a name="ApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.apiTargets"></a>

```csharp
public object ApiTargets { get; set; }
```

- *Type:* object

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#api_targets GoogleApikeysKey#api_targets}

---

##### `BrowserKeyRestrictions`<sup>Optional</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#browser_key_restrictions GoogleApikeysKey#browser_key_restrictions}

---

##### `IosKeyRestrictions`<sup>Optional</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#ios_key_restrictions GoogleApikeysKey#ios_key_restrictions}

---

##### `ServerKeyRestrictions`<sup>Optional</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#server_key_restrictions GoogleApikeysKey#server_key_restrictions}

---

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictions <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictions {
    object AllowedApplications
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">AllowedApplications</a></code> | <code>object</code> | allowed_applications block. |

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```csharp
public object AllowedApplications { get; set; }
```

- *Type:* object

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#allowed_applications GoogleApikeysKey#allowed_applications}

---

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications {
    string PackageName,
    string Sha1Fingerprint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">PackageName</a></code> | <code>string</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | The SHA1 fingerprint of the application. |

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

The package name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#package_name GoogleApikeysKey#package_name}

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; set; }
```

- *Type:* string

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#sha1_fingerprint GoogleApikeysKey#sha1_fingerprint}

---

### GoogleApikeysKeyRestrictionsApiTargets <a name="GoogleApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsApiTargets {
    string Service,
    string[] Methods = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.service">Service</a></code> | <code>string</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.methods">Methods</a></code> | <code>string[]</code> | Optional. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#service GoogleApikeysKey#service}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargets.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#methods GoogleApikeysKey#methods}

---

### GoogleApikeysKeyRestrictionsBrowserKeyRestrictions <a name="GoogleApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsBrowserKeyRestrictions {
    string[] AllowedReferrers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">AllowedReferrers</a></code> | <code>string[]</code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```csharp
public string[] AllowedReferrers { get; set; }
```

- *Type:* string[]

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#allowed_referrers GoogleApikeysKey#allowed_referrers}

---

### GoogleApikeysKeyRestrictionsIosKeyRestrictions <a name="GoogleApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsIosKeyRestrictions {
    string[] AllowedBundleIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; set; }
```

- *Type:* string[]

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#allowed_bundle_ids GoogleApikeysKey#allowed_bundle_ids}

---

### GoogleApikeysKeyRestrictionsServerKeyRestrictions <a name="GoogleApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsServerKeyRestrictions {
    string[] AllowedIps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; set; }
```

- *Type:* string[]

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#allowed_ips GoogleApikeysKey#allowed_ips}

---

### GoogleApikeysKeyTimeouts <a name="GoogleApikeysKeyTimeouts" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#create GoogleApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#delete GoogleApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#update GoogleApikeysKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#create GoogleApikeysKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#delete GoogleApikeysKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apikeys_key#update GoogleApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```csharp
private GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">Sha1FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `Sha1FingerprintInput`<sup>Optional</sup> <a name="Sha1FingerprintInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```csharp
public string Sha1FingerprintInput { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">PutAllowedApplications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedApplications` <a name="PutAllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```csharp
private void PutAllowedApplications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">AllowedApplications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">AllowedApplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```csharp
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList AllowedApplications { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `AllowedApplicationsInput`<sup>Optional</sup> <a name="AllowedApplicationsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```csharp
public object AllowedApplicationsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsApiTargetsList <a name="GoogleApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsApiTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get"></a>

```csharp
private GoogleApikeysKeyRestrictionsApiTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApikeysKeyRestrictionsApiTargetsOutputReference <a name="GoogleApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsApiTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```csharp
private void ResetMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">AllowedReferrersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">AllowedReferrers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedReferrersInput`<sup>Optional</sup> <a name="AllowedReferrersInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```csharp
public string[] AllowedReferrersInput { get; }
```

- *Type:* string[]

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```csharp
public string[] AllowedReferrers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">AllowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedBundleIdsInput`<sup>Optional</sup> <a name="AllowedBundleIdsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```csharp
public string[] AllowedBundleIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public GoogleApikeysKeyRestrictionsIosKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">PutAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets">PutApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">PutBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">PutIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">PutServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">ResetAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetApiTargets">ResetApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">ResetBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">ResetIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">ResetServerKeyRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroidKeyRestrictions` <a name="PutAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```csharp
private void PutAndroidKeyRestrictions(GoogleApikeysKeyRestrictionsAndroidKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `PutApiTargets` <a name="PutApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```csharp
private void PutApiTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* object

---

##### `PutBrowserKeyRestrictions` <a name="PutBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```csharp
private void PutBrowserKeyRestrictions(GoogleApikeysKeyRestrictionsBrowserKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `PutIosKeyRestrictions` <a name="PutIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```csharp
private void PutIosKeyRestrictions(GoogleApikeysKeyRestrictionsIosKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `PutServerKeyRestrictions` <a name="PutServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```csharp
private void PutServerKeyRestrictions(GoogleApikeysKeyRestrictionsServerKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `ResetAndroidKeyRestrictions` <a name="ResetAndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```csharp
private void ResetAndroidKeyRestrictions()
```

##### `ResetApiTargets` <a name="ResetApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```csharp
private void ResetApiTargets()
```

##### `ResetBrowserKeyRestrictions` <a name="ResetBrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```csharp
private void ResetBrowserKeyRestrictions()
```

##### `ResetIosKeyRestrictions` <a name="ResetIosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```csharp
private void ResetIosKeyRestrictions()
```

##### `ResetServerKeyRestrictions` <a name="ResetServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```csharp
private void ResetServerKeyRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargets">ApiTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList">GoogleApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">AndroidKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">ApiTargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">BrowserKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">IosKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">ServerKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AndroidKeyRestrictions`<sup>Required</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference AndroidKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `ApiTargets`<sup>Required</sup> <a name="ApiTargets" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```csharp
public GoogleApikeysKeyRestrictionsApiTargetsList ApiTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsApiTargetsList">GoogleApikeysKeyRestrictionsApiTargetsList</a>

---

##### `BrowserKeyRestrictions`<sup>Required</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference BrowserKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `IosKeyRestrictions`<sup>Required</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference IosKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `ServerKeyRestrictions`<sup>Required</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```csharp
public GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference ServerKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `AndroidKeyRestrictionsInput`<sup>Optional</sup> <a name="AndroidKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```csharp
public GoogleApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsAndroidKeyRestrictions">GoogleApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `ApiTargetsInput`<sup>Optional</sup> <a name="ApiTargetsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```csharp
public object ApiTargetsInput { get; }
```

- *Type:* object

---

##### `BrowserKeyRestrictionsInput`<sup>Optional</sup> <a name="BrowserKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```csharp
public GoogleApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsBrowserKeyRestrictions">GoogleApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `IosKeyRestrictionsInput`<sup>Optional</sup> <a name="IosKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```csharp
public GoogleApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsIosKeyRestrictions">GoogleApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `ServerKeyRestrictionsInput`<sup>Optional</sup> <a name="ServerKeyRestrictionsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```csharp
public GoogleApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public GoogleApikeysKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictions">GoogleApikeysKeyRestrictions</a>

---


### GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">AllowedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpsInput`<sup>Optional</sup> <a name="AllowedIpsInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```csharp
public string[] AllowedIpsInput { get; }
```

- *Type:* string[]

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public GoogleApikeysKeyRestrictionsServerKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyRestrictionsServerKeyRestrictions">GoogleApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### GoogleApikeysKeyTimeoutsOutputReference <a name="GoogleApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApikeysKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApikeysKey.GoogleApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



