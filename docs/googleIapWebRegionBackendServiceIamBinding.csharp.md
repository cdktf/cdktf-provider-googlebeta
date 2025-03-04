# `googleIapWebRegionBackendServiceIamBinding` Submodule <a name="`googleIapWebRegionBackendServiceIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebRegionBackendServiceIamBinding <a name="GoogleIapWebRegionBackendServiceIamBinding" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding google_iap_web_region_backend_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebRegionBackendServiceIamBinding(Construct Scope, string Id, GoogleIapWebRegionBackendServiceIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig">GoogleIapWebRegionBackendServiceIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig">GoogleIapWebRegionBackendServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleIapWebRegionBackendServiceIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapWebRegionBackendServiceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebRegionBackendServiceIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebRegionBackendServiceIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebRegionBackendServiceIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebRegionBackendServiceIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIapWebRegionBackendServiceIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebRegionBackendServiceIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebRegionBackendServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapWebRegionBackendServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference">GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.webRegionBackendServiceInput">WebRegionBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.condition"></a>

```csharp
public GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference">GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.conditionInput"></a>

```csharp
public GoogleIapWebRegionBackendServiceIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `WebRegionBackendServiceInput`<sup>Optional</sup> <a name="WebRegionBackendServiceInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.webRegionBackendServiceInput"></a>

```csharp
public string WebRegionBackendServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebRegionBackendServiceIamBindingCondition <a name="GoogleIapWebRegionBackendServiceIamBindingCondition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebRegionBackendServiceIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#expression GoogleIapWebRegionBackendServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#title GoogleIapWebRegionBackendServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#description GoogleIapWebRegionBackendServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#expression GoogleIapWebRegionBackendServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#title GoogleIapWebRegionBackendServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#description GoogleIapWebRegionBackendServiceIamBinding#description}.

---

### GoogleIapWebRegionBackendServiceIamBindingConfig <a name="GoogleIapWebRegionBackendServiceIamBindingConfig" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebRegionBackendServiceIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Role,
    string WebRegionBackendService,
    GoogleIapWebRegionBackendServiceIamBindingCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#members GoogleIapWebRegionBackendServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#role GoogleIapWebRegionBackendServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#web_region_backend_service GoogleIapWebRegionBackendServiceIamBinding#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#id GoogleIapWebRegionBackendServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#project GoogleIapWebRegionBackendServiceIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#region GoogleIapWebRegionBackendServiceIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#members GoogleIapWebRegionBackendServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#role GoogleIapWebRegionBackendServiceIamBinding#role}.

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#web_region_backend_service GoogleIapWebRegionBackendServiceIamBinding#web_region_backend_service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.condition"></a>

```csharp
public GoogleIapWebRegionBackendServiceIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#condition GoogleIapWebRegionBackendServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#id GoogleIapWebRegionBackendServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#project GoogleIapWebRegionBackendServiceIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_region_backend_service_iam_binding#region GoogleIapWebRegionBackendServiceIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference <a name="GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleIapWebRegionBackendServiceIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebRegionBackendServiceIamBinding.GoogleIapWebRegionBackendServiceIamBindingCondition">GoogleIapWebRegionBackendServiceIamBindingCondition</a>

---



