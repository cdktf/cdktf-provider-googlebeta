# `googleIapWebBackendServiceIamBinding` Submodule <a name="`googleIapWebBackendServiceIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebBackendServiceIamBinding <a name="GoogleIapWebBackendServiceIamBinding" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding google_iap_web_backend_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebBackendServiceIamBinding(Construct Scope, string Id, GoogleIapWebBackendServiceIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig">GoogleIapWebBackendServiceIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig">GoogleIapWebBackendServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleIapWebBackendServiceIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapWebBackendServiceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebBackendServiceIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebBackendServiceIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebBackendServiceIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapWebBackendServiceIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIapWebBackendServiceIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebBackendServiceIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebBackendServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapWebBackendServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference">GoogleIapWebBackendServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendServiceInput">WebBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendService">WebBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.condition"></a>

```csharp
public GoogleIapWebBackendServiceIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference">GoogleIapWebBackendServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.conditionInput"></a>

```csharp
public GoogleIapWebBackendServiceIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `WebBackendServiceInput`<sup>Optional</sup> <a name="WebBackendServiceInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendServiceInput"></a>

```csharp
public string WebBackendServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `WebBackendService`<sup>Required</sup> <a name="WebBackendService" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendService"></a>

```csharp
public string WebBackendService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebBackendServiceIamBindingCondition <a name="GoogleIapWebBackendServiceIamBindingCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebBackendServiceIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#expression GoogleIapWebBackendServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#title GoogleIapWebBackendServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#description GoogleIapWebBackendServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#expression GoogleIapWebBackendServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#title GoogleIapWebBackendServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#description GoogleIapWebBackendServiceIamBinding#description}.

---

### GoogleIapWebBackendServiceIamBindingConfig <a name="GoogleIapWebBackendServiceIamBindingConfig" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebBackendServiceIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Role,
    string WebBackendService,
    GoogleIapWebBackendServiceIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#members GoogleIapWebBackendServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#role GoogleIapWebBackendServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.webBackendService">WebBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#web_backend_service GoogleIapWebBackendServiceIamBinding#web_backend_service}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#id GoogleIapWebBackendServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#project GoogleIapWebBackendServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#members GoogleIapWebBackendServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#role GoogleIapWebBackendServiceIamBinding#role}.

---

##### `WebBackendService`<sup>Required</sup> <a name="WebBackendService" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.webBackendService"></a>

```csharp
public string WebBackendService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#web_backend_service GoogleIapWebBackendServiceIamBinding#web_backend_service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.condition"></a>

```csharp
public GoogleIapWebBackendServiceIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#condition GoogleIapWebBackendServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#id GoogleIapWebBackendServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_iap_web_backend_service_iam_binding#project GoogleIapWebBackendServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebBackendServiceIamBindingConditionOutputReference <a name="GoogleIapWebBackendServiceIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapWebBackendServiceIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleIapWebBackendServiceIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---



