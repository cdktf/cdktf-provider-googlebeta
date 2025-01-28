# `googleFirestoreField` Submodule <a name="`googleFirestoreField` Submodule" id="@cdktf/provider-google-beta.googleFirestoreField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreField <a name="GoogleFirestoreField" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field google_firestore_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreField(Construct Scope, string Id, GoogleFirestoreFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig">GoogleFirestoreFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig">GoogleFirestoreFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig">PutIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig">PutTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig">ResetIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig">ResetTtlConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIndexConfig` <a name="PutIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig"></a>

```csharp
private void PutIndexConfig(GoogleFirestoreFieldIndexConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirestoreFieldTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---

##### `PutTtlConfig` <a name="PutTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig"></a>

```csharp
private void PutTtlConfig(GoogleFirestoreFieldTtlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexConfig` <a name="ResetIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig"></a>

```csharp
private void ResetIndexConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtlConfig` <a name="ResetTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig"></a>

```csharp
private void ResetTtlConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreField.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleFirestoreField resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirestoreField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirestoreField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput">CollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput">IndexConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput">TtlConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection">Collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig"></a>

```csharp
public GoogleFirestoreFieldIndexConfigOutputReference IndexConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts"></a>

```csharp
public GoogleFirestoreFieldTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a>

---

##### `TtlConfig`<sup>Required</sup> <a name="TtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig"></a>

```csharp
public GoogleFirestoreFieldTtlConfigOutputReference TtlConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a>

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput"></a>

```csharp
public string CollectionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexConfigInput`<sup>Optional</sup> <a name="IndexConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput"></a>

```csharp
public GoogleFirestoreFieldIndexConfig IndexConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlConfigInput`<sup>Optional</sup> <a name="TtlConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput"></a>

```csharp
public GoogleFirestoreFieldTtlConfig TtlConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection"></a>

```csharp
public string Collection { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreFieldConfig <a name="GoogleFirestoreFieldConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Collection,
    string Field,
    string Database = null,
    string Id = null,
    GoogleFirestoreFieldIndexConfig IndexConfig = null,
    string Project = null,
    GoogleFirestoreFieldTimeouts Timeouts = null,
    GoogleFirestoreFieldTtlConfig TtlConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection">Collection</a></code> | <code>string</code> | The id of the collection group to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field">Field</a></code> | <code>string</code> | The id of the field to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database">Database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection"></a>

```csharp
public string Collection { get; set; }
```

- *Type:* string

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#collection GoogleFirestoreField#collection}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#field GoogleFirestoreField#field}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#database GoogleFirestoreField#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfig`<sup>Optional</sup> <a name="IndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig"></a>

```csharp
public GoogleFirestoreFieldIndexConfig IndexConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#index_config GoogleFirestoreField#index_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts"></a>

```csharp
public GoogleFirestoreFieldTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#timeouts GoogleFirestoreField#timeouts}

---

##### `TtlConfig`<sup>Optional</sup> <a name="TtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig"></a>

```csharp
public GoogleFirestoreFieldTtlConfig TtlConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#ttl_config GoogleFirestoreField#ttl_config}

---

### GoogleFirestoreFieldIndexConfig <a name="GoogleFirestoreFieldIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldIndexConfig {
    object Indexes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes">Indexes</a></code> | <code>object</code> | indexes block. |

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes"></a>

```csharp
public object Indexes { get; set; }
```

- *Type:* object

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#indexes GoogleFirestoreField#indexes}

---

### GoogleFirestoreFieldIndexConfigIndexes <a name="GoogleFirestoreFieldIndexConfigIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldIndexConfigIndexes {
    string ArrayConfig = null,
    string Order = null,
    string QueryScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order">Order</a></code> | <code>string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope">QueryScope</a></code> | <code>string</code> | The scope at which a query is run. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; set; }
```

- *Type:* string

Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#array_config GoogleFirestoreField#array_config}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#order GoogleFirestoreField#order}

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope"></a>

```csharp
public string QueryScope { get; set; }
```

- *Type:* string

The scope at which a query is run.

Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#query_scope GoogleFirestoreField#query_scope}

---

### GoogleFirestoreFieldTimeouts <a name="GoogleFirestoreFieldTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}.

---

### GoogleFirestoreFieldTtlConfig <a name="GoogleFirestoreFieldTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldTtlConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreFieldIndexConfigIndexesList <a name="GoogleFirestoreFieldIndexConfigIndexesList" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldIndexConfigIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get"></a>

```csharp
private GoogleFirestoreFieldIndexConfigIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleFirestoreFieldIndexConfigIndexesOutputReference <a name="GoogleFirestoreFieldIndexConfigIndexesOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldIndexConfigIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig">ResetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope">ResetQueryScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig"></a>

```csharp
private void ResetArrayConfig()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope"></a>

```csharp
private void ResetQueryScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput">QueryScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope">QueryScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput"></a>

```csharp
public string ArrayConfigInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput"></a>

```csharp
public string QueryScopeInput { get; }
```

- *Type:* string

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope"></a>

```csharp
public string QueryScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleFirestoreFieldIndexConfigOutputReference <a name="GoogleFirestoreFieldIndexConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldIndexConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes">PutIndexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes">ResetIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndexes` <a name="PutIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes"></a>

```csharp
private void PutIndexes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes.parameter.value"></a>

- *Type:* object

---

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes"></a>

```csharp
private void ResetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput">IndexesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes"></a>

```csharp
public GoogleFirestoreFieldIndexConfigIndexesList Indexes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a>

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput"></a>

```csharp
public object IndexesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreFieldIndexConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---


### GoogleFirestoreFieldTimeoutsOutputReference <a name="GoogleFirestoreFieldTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleFirestoreFieldTtlConfigOutputReference <a name="GoogleFirestoreFieldTtlConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreFieldTtlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreFieldTtlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---



