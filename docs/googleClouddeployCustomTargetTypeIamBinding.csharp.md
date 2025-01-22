# `googleClouddeployCustomTargetTypeIamBinding` Submodule <a name="`googleClouddeployCustomTargetTypeIamBinding` Submodule" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployCustomTargetTypeIamBinding <a name="GoogleClouddeployCustomTargetTypeIamBinding" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding google_clouddeploy_custom_target_type_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeIamBinding(Construct Scope, string Id, GoogleClouddeployCustomTargetTypeIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig">GoogleClouddeployCustomTargetTypeIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig">GoogleClouddeployCustomTargetTypeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleClouddeployCustomTargetTypeIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployCustomTargetTypeIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployCustomTargetTypeIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployCustomTargetTypeIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployCustomTargetTypeIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployCustomTargetTypeIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployCustomTargetTypeIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployCustomTargetTypeIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference">GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.condition"></a>

```csharp
public GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference">GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.conditionInput"></a>

```csharp
public GoogleClouddeployCustomTargetTypeIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployCustomTargetTypeIamBindingCondition <a name="GoogleClouddeployCustomTargetTypeIamBindingCondition" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#expression GoogleClouddeployCustomTargetTypeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#title GoogleClouddeployCustomTargetTypeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#description GoogleClouddeployCustomTargetTypeIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#expression GoogleClouddeployCustomTargetTypeIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#title GoogleClouddeployCustomTargetTypeIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#description GoogleClouddeployCustomTargetTypeIamBinding#description}.

---

### GoogleClouddeployCustomTargetTypeIamBindingConfig <a name="GoogleClouddeployCustomTargetTypeIamBindingConfig" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    GoogleClouddeployCustomTargetTypeIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#members GoogleClouddeployCustomTargetTypeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#name GoogleClouddeployCustomTargetTypeIamBinding#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#role GoogleClouddeployCustomTargetTypeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#id GoogleClouddeployCustomTargetTypeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#location GoogleClouddeployCustomTargetTypeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#project GoogleClouddeployCustomTargetTypeIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#members GoogleClouddeployCustomTargetTypeIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#name GoogleClouddeployCustomTargetTypeIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#role GoogleClouddeployCustomTargetTypeIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.condition"></a>

```csharp
public GoogleClouddeployCustomTargetTypeIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#condition GoogleClouddeployCustomTargetTypeIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#id GoogleClouddeployCustomTargetTypeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#location GoogleClouddeployCustomTargetTypeIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_clouddeploy_custom_target_type_iam_binding#project GoogleClouddeployCustomTargetTypeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference <a name="GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployCustomTargetTypeIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamBinding.GoogleClouddeployCustomTargetTypeIamBindingCondition">GoogleClouddeployCustomTargetTypeIamBindingCondition</a>

---



