# `googleSourcerepoRepositoryIamBinding` Submodule <a name="`googleSourcerepoRepositoryIamBinding` Submodule" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSourcerepoRepositoryIamBinding <a name="GoogleSourcerepoRepositoryIamBinding" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding google_sourcerepo_repository_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSourcerepoRepositoryIamBinding(Construct Scope, string Id, GoogleSourcerepoRepositoryIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig">GoogleSourcerepoRepositoryIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig">GoogleSourcerepoRepositoryIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleSourcerepoRepositoryIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSourcerepoRepositoryIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSourcerepoRepositoryIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSourcerepoRepositoryIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSourcerepoRepositoryIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSourcerepoRepositoryIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSourcerepoRepositoryIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSourcerepoRepositoryIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSourcerepoRepositoryIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSourcerepoRepositoryIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference">GoogleSourcerepoRepositoryIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.condition"></a>

```csharp
public GoogleSourcerepoRepositoryIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference">GoogleSourcerepoRepositoryIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.conditionInput"></a>

```csharp
public GoogleSourcerepoRepositoryIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSourcerepoRepositoryIamBindingCondition <a name="GoogleSourcerepoRepositoryIamBindingCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSourcerepoRepositoryIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#expression GoogleSourcerepoRepositoryIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#title GoogleSourcerepoRepositoryIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#description GoogleSourcerepoRepositoryIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#expression GoogleSourcerepoRepositoryIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#title GoogleSourcerepoRepositoryIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#description GoogleSourcerepoRepositoryIamBinding#description}.

---

### GoogleSourcerepoRepositoryIamBindingConfig <a name="GoogleSourcerepoRepositoryIamBindingConfig" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSourcerepoRepositoryIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Repository,
    string Role,
    GoogleSourcerepoRepositoryIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#members GoogleSourcerepoRepositoryIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#repository GoogleSourcerepoRepositoryIamBinding#repository}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#role GoogleSourcerepoRepositoryIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#id GoogleSourcerepoRepositoryIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#project GoogleSourcerepoRepositoryIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#members GoogleSourcerepoRepositoryIamBinding#members}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#repository GoogleSourcerepoRepositoryIamBinding#repository}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#role GoogleSourcerepoRepositoryIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.condition"></a>

```csharp
public GoogleSourcerepoRepositoryIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#condition GoogleSourcerepoRepositoryIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#id GoogleSourcerepoRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_sourcerepo_repository_iam_binding#project GoogleSourcerepoRepositoryIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSourcerepoRepositoryIamBindingConditionOutputReference <a name="GoogleSourcerepoRepositoryIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSourcerepoRepositoryIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleSourcerepoRepositoryIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamBinding.GoogleSourcerepoRepositoryIamBindingCondition">GoogleSourcerepoRepositoryIamBindingCondition</a>

---



