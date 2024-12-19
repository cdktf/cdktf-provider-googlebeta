# `googleDataplexEntryTypeIamMember` Submodule <a name="`googleDataplexEntryTypeIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntryTypeIamMember <a name="GoogleDataplexEntryTypeIamMember" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member google_dataplex_entry_type_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexEntryTypeIamMember(Construct Scope, string Id, GoogleDataplexEntryTypeIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig">GoogleDataplexEntryTypeIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig">GoogleDataplexEntryTypeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleDataplexEntryTypeIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexEntryTypeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexEntryTypeIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexEntryTypeIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexEntryTypeIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexEntryTypeIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataplexEntryTypeIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexEntryTypeIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexEntryTypeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntryTypeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference">GoogleDataplexEntryTypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.entryTypeIdInput">EntryTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.entryTypeId">EntryTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.condition"></a>

```csharp
public GoogleDataplexEntryTypeIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference">GoogleDataplexEntryTypeIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.conditionInput"></a>

```csharp
public GoogleDataplexEntryTypeIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a>

---

##### `EntryTypeIdInput`<sup>Optional</sup> <a name="EntryTypeIdInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.entryTypeIdInput"></a>

```csharp
public string EntryTypeIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `EntryTypeId`<sup>Required</sup> <a name="EntryTypeId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.entryTypeId"></a>

```csharp
public string EntryTypeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryTypeIamMemberCondition <a name="GoogleDataplexEntryTypeIamMemberCondition" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexEntryTypeIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#expression GoogleDataplexEntryTypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#title GoogleDataplexEntryTypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#description GoogleDataplexEntryTypeIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#expression GoogleDataplexEntryTypeIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#title GoogleDataplexEntryTypeIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#description GoogleDataplexEntryTypeIamMember#description}.

---

### GoogleDataplexEntryTypeIamMemberConfig <a name="GoogleDataplexEntryTypeIamMemberConfig" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexEntryTypeIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EntryTypeId,
    string Member,
    string Role,
    GoogleDataplexEntryTypeIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.entryTypeId">EntryTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#entry_type_id GoogleDataplexEntryTypeIamMember#entry_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#member GoogleDataplexEntryTypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#role GoogleDataplexEntryTypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#id GoogleDataplexEntryTypeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#location GoogleDataplexEntryTypeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#project GoogleDataplexEntryTypeIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EntryTypeId`<sup>Required</sup> <a name="EntryTypeId" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.entryTypeId"></a>

```csharp
public string EntryTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#entry_type_id GoogleDataplexEntryTypeIamMember#entry_type_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#member GoogleDataplexEntryTypeIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#role GoogleDataplexEntryTypeIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.condition"></a>

```csharp
public GoogleDataplexEntryTypeIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#condition GoogleDataplexEntryTypeIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#id GoogleDataplexEntryTypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#location GoogleDataplexEntryTypeIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_entry_type_iam_member#project GoogleDataplexEntryTypeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryTypeIamMemberConditionOutputReference <a name="GoogleDataplexEntryTypeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexEntryTypeIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexEntryTypeIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryTypeIamMember.GoogleDataplexEntryTypeIamMemberCondition">GoogleDataplexEntryTypeIamMemberCondition</a>

---



