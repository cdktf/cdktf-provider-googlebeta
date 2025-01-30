# `googleParameterManagerRegionalParameter` Submodule <a name="`googleParameterManagerRegionalParameter` Submodule" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerRegionalParameter <a name="GoogleParameterManagerRegionalParameter" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter google_parameter_manager_regional_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameter(Construct Scope, string Id, GoogleParameterManagerRegionalParameterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig">GoogleParameterManagerRegionalParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleParameterManagerRegionalParameterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleParameterManagerRegionalParameter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleParameterManagerRegionalParameter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleParameterManagerRegionalParameter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleParameterManagerRegionalParameter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleParameterManagerRegionalParameter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleParameterManagerRegionalParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerRegionalParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember">PolicyMember</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput">ParameterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId">ParameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyMember`<sup>Required</sup> <a name="PolicyMember" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember"></a>

```csharp
public GoogleParameterManagerRegionalParameterPolicyMemberList PolicyMember { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts"></a>

```csharp
public GoogleParameterManagerRegionalParameterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParameterIdInput`<sup>Optional</sup> <a name="ParameterIdInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput"></a>

```csharp
public string ParameterIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId"></a>

```csharp
public string ParameterId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerRegionalParameterConfig <a name="GoogleParameterManagerRegionalParameterConfig" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string ParameterId,
    string Format = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleParameterManagerRegionalParameterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location">Location</a></code> | <code>string</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId">ParameterId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format">Format</a></code> | <code>string</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#location GoogleParameterManagerRegionalParameter#location}

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId"></a>

```csharp
public string ParameterId { get; set; }
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#parameter_id GoogleParameterManagerRegionalParameter#parameter_id}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#format GoogleParameterManagerRegionalParameter#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#labels GoogleParameterManagerRegionalParameter#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts"></a>

```csharp
public GoogleParameterManagerRegionalParameterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#timeouts GoogleParameterManagerRegionalParameter#timeouts}

---

### GoogleParameterManagerRegionalParameterPolicyMember <a name="GoogleParameterManagerRegionalParameterPolicyMember" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterPolicyMember {

};
```


### GoogleParameterManagerRegionalParameterTimeouts <a name="GoogleParameterManagerRegionalParameterTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerRegionalParameterPolicyMemberList <a name="GoogleParameterManagerRegionalParameterPolicyMemberList" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterPolicyMemberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get"></a>

```csharp
private GoogleParameterManagerRegionalParameterPolicyMemberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleParameterManagerRegionalParameterPolicyMemberOutputReference <a name="GoogleParameterManagerRegionalParameterPolicyMemberOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterPolicyMemberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">IamPolicyNamePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">IamPolicyUidPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamPolicyNamePrincipal`<sup>Required</sup> <a name="IamPolicyNamePrincipal" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```csharp
public string IamPolicyNamePrincipal { get; }
```

- *Type:* string

---

##### `IamPolicyUidPrincipal`<sup>Required</sup> <a name="IamPolicyUidPrincipal" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```csharp
public string IamPolicyUidPrincipal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue"></a>

```csharp
public GoogleParameterManagerRegionalParameterPolicyMember InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a>

---


### GoogleParameterManagerRegionalParameterTimeoutsOutputReference <a name="GoogleParameterManagerRegionalParameterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleParameterManagerRegionalParameterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



