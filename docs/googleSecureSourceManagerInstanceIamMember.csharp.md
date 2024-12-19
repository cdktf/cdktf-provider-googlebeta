# `googleSecureSourceManagerInstanceIamMember` Submodule <a name="`googleSecureSourceManagerInstanceIamMember` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerInstanceIamMember <a name="GoogleSecureSourceManagerInstanceIamMember" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member google_secure_source_manager_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceIamMember(Construct Scope, string Id, GoogleSecureSourceManagerInstanceIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig">GoogleSecureSourceManagerInstanceIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig">GoogleSecureSourceManagerInstanceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleSecureSourceManagerInstanceIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerInstanceIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerInstanceIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerInstanceIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerInstanceIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecureSourceManagerInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecureSourceManagerInstanceIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecureSourceManagerInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference">GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.condition"></a>

```csharp
public GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference">GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.conditionInput"></a>

```csharp
public GoogleSecureSourceManagerInstanceIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerInstanceIamMemberCondition <a name="GoogleSecureSourceManagerInstanceIamMemberCondition" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#expression GoogleSecureSourceManagerInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#title GoogleSecureSourceManagerInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#description GoogleSecureSourceManagerInstanceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#expression GoogleSecureSourceManagerInstanceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#title GoogleSecureSourceManagerInstanceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#description GoogleSecureSourceManagerInstanceIamMember#description}.

---

### GoogleSecureSourceManagerInstanceIamMemberConfig <a name="GoogleSecureSourceManagerInstanceIamMemberConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Member,
    string Role,
    GoogleSecureSourceManagerInstanceIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#instance_id GoogleSecureSourceManagerInstanceIamMember#instance_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#member GoogleSecureSourceManagerInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#role GoogleSecureSourceManagerInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#id GoogleSecureSourceManagerInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#location GoogleSecureSourceManagerInstanceIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#project GoogleSecureSourceManagerInstanceIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#instance_id GoogleSecureSourceManagerInstanceIamMember#instance_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#member GoogleSecureSourceManagerInstanceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#role GoogleSecureSourceManagerInstanceIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.condition"></a>

```csharp
public GoogleSecureSourceManagerInstanceIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#condition GoogleSecureSourceManagerInstanceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#id GoogleSecureSourceManagerInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#location GoogleSecureSourceManagerInstanceIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_secure_source_manager_instance_iam_member#project GoogleSecureSourceManagerInstanceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference <a name="GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleSecureSourceManagerInstanceIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstanceIamMember.GoogleSecureSourceManagerInstanceIamMemberCondition">GoogleSecureSourceManagerInstanceIamMemberCondition</a>

---



