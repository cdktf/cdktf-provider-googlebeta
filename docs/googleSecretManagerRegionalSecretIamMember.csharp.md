# `googleSecretManagerRegionalSecretIamMember` Submodule <a name="`googleSecretManagerRegionalSecretIamMember` Submodule" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretIamMember <a name="GoogleSecretManagerRegionalSecretIamMember" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member google_secret_manager_regional_secret_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretIamMember(Construct Scope, string Id, GoogleSecretManagerRegionalSecretIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig">GoogleSecretManagerRegionalSecretIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig">GoogleSecretManagerRegionalSecretIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleSecretManagerRegionalSecretIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecretManagerRegionalSecretIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecretIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecretIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecretIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecretIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecretManagerRegionalSecretIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecretManagerRegionalSecretIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference">GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.condition"></a>

```csharp
public GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference">GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.conditionInput"></a>

```csharp
public GoogleSecretManagerRegionalSecretIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretIamMemberCondition <a name="GoogleSecretManagerRegionalSecretIamMemberCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#expression GoogleSecretManagerRegionalSecretIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#title GoogleSecretManagerRegionalSecretIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#description GoogleSecretManagerRegionalSecretIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#expression GoogleSecretManagerRegionalSecretIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#title GoogleSecretManagerRegionalSecretIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#description GoogleSecretManagerRegionalSecretIamMember#description}.

---

### GoogleSecretManagerRegionalSecretIamMemberConfig <a name="GoogleSecretManagerRegionalSecretIamMemberConfig" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Role,
    string SecretId,
    GoogleSecretManagerRegionalSecretIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#member GoogleSecretManagerRegionalSecretIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#role GoogleSecretManagerRegionalSecretIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#secret_id GoogleSecretManagerRegionalSecretIamMember#secret_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#id GoogleSecretManagerRegionalSecretIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#location GoogleSecretManagerRegionalSecretIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#project GoogleSecretManagerRegionalSecretIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#member GoogleSecretManagerRegionalSecretIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#role GoogleSecretManagerRegionalSecretIamMember#role}.

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#secret_id GoogleSecretManagerRegionalSecretIamMember#secret_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.condition"></a>

```csharp
public GoogleSecretManagerRegionalSecretIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#condition GoogleSecretManagerRegionalSecretIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#id GoogleSecretManagerRegionalSecretIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#location GoogleSecretManagerRegionalSecretIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secret_manager_regional_secret_iam_member#project GoogleSecretManagerRegionalSecretIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference <a name="GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleSecretManagerRegionalSecretIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamMember.GoogleSecretManagerRegionalSecretIamMemberCondition">GoogleSecretManagerRegionalSecretIamMemberCondition</a>

---



