# `googleWorkstationsWorkstationConfigIamBinding` Submodule <a name="`googleWorkstationsWorkstationConfigIamBinding` Submodule" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationConfigIamBinding <a name="GoogleWorkstationsWorkstationConfigIamBinding" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding google_workstations_workstation_config_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleWorkstationsWorkstationConfigIamBinding(Construct Scope, string Id, GoogleWorkstationsWorkstationConfigIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig">GoogleWorkstationsWorkstationConfigIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig">GoogleWorkstationsWorkstationConfigIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleWorkstationsWorkstationConfigIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkstationsWorkstationConfigIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleWorkstationsWorkstationConfigIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleWorkstationsWorkstationConfigIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleWorkstationsWorkstationConfigIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleWorkstationsWorkstationConfigIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleWorkstationsWorkstationConfigIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkstationsWorkstationConfigIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkstationsWorkstationConfigIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkstationsWorkstationConfigIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference">GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.condition"></a>

```csharp
public GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference">GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.conditionInput"></a>

```csharp
public GoogleWorkstationsWorkstationConfigIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationConfigIdInput"></a>

```csharp
public string WorkstationConfigIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationConfigIamBindingCondition <a name="GoogleWorkstationsWorkstationConfigIamBindingCondition" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleWorkstationsWorkstationConfigIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#expression GoogleWorkstationsWorkstationConfigIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#title GoogleWorkstationsWorkstationConfigIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#description GoogleWorkstationsWorkstationConfigIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#expression GoogleWorkstationsWorkstationConfigIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#title GoogleWorkstationsWorkstationConfigIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#description GoogleWorkstationsWorkstationConfigIamBinding#description}.

---

### GoogleWorkstationsWorkstationConfigIamBindingConfig <a name="GoogleWorkstationsWorkstationConfigIamBindingConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleWorkstationsWorkstationConfigIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Role,
    string WorkstationClusterId,
    string WorkstationConfigId,
    GoogleWorkstationsWorkstationConfigIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#members GoogleWorkstationsWorkstationConfigIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#role GoogleWorkstationsWorkstationConfigIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#workstation_cluster_id GoogleWorkstationsWorkstationConfigIamBinding#workstation_cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#workstation_config_id GoogleWorkstationsWorkstationConfigIamBinding#workstation_config_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#id GoogleWorkstationsWorkstationConfigIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#location GoogleWorkstationsWorkstationConfigIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#project GoogleWorkstationsWorkstationConfigIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#members GoogleWorkstationsWorkstationConfigIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#role GoogleWorkstationsWorkstationConfigIamBinding#role}.

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#workstation_cluster_id GoogleWorkstationsWorkstationConfigIamBinding#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#workstation_config_id GoogleWorkstationsWorkstationConfigIamBinding#workstation_config_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.condition"></a>

```csharp
public GoogleWorkstationsWorkstationConfigIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#condition GoogleWorkstationsWorkstationConfigIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#id GoogleWorkstationsWorkstationConfigIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#location GoogleWorkstationsWorkstationConfigIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_workstations_workstation_config_iam_binding#project GoogleWorkstationsWorkstationConfigIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference <a name="GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleWorkstationsWorkstationConfigIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfigIamBinding.GoogleWorkstationsWorkstationConfigIamBindingCondition">GoogleWorkstationsWorkstationConfigIamBindingCondition</a>

---



