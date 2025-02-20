# `googleHealthcareConsentStoreIamBinding` Submodule <a name="`googleHealthcareConsentStoreIamBinding` Submodule" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareConsentStoreIamBinding <a name="GoogleHealthcareConsentStoreIamBinding" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding google_healthcare_consent_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareConsentStoreIamBinding(Construct Scope, string Id, GoogleHealthcareConsentStoreIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig">GoogleHealthcareConsentStoreIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig">GoogleHealthcareConsentStoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleHealthcareConsentStoreIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareConsentStoreIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareConsentStoreIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareConsentStoreIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareConsentStoreIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareConsentStoreIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleHealthcareConsentStoreIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareConsentStoreIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareConsentStoreIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareConsentStoreIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference">GoogleHealthcareConsentStoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreId">ConsentStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.condition"></a>

```csharp
public GoogleHealthcareConsentStoreIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference">GoogleHealthcareConsentStoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.conditionInput"></a>

```csharp
public GoogleHealthcareConsentStoreIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreIdInput"></a>

```csharp
public string ConsentStoreIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.consentStoreId"></a>

```csharp
public string ConsentStoreId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareConsentStoreIamBindingCondition <a name="GoogleHealthcareConsentStoreIamBindingCondition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareConsentStoreIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#expression GoogleHealthcareConsentStoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#title GoogleHealthcareConsentStoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#description GoogleHealthcareConsentStoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#expression GoogleHealthcareConsentStoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#title GoogleHealthcareConsentStoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#description GoogleHealthcareConsentStoreIamBinding#description}.

---

### GoogleHealthcareConsentStoreIamBindingConfig <a name="GoogleHealthcareConsentStoreIamBindingConfig" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareConsentStoreIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsentStoreId,
    string Dataset,
    string[] Members,
    string Role,
    GoogleHealthcareConsentStoreIamBindingCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#consent_store_id GoogleHealthcareConsentStoreIamBinding#consent_store_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dataset">Dataset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#dataset GoogleHealthcareConsentStoreIamBinding#dataset}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#members GoogleHealthcareConsentStoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#role GoogleHealthcareConsentStoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#id GoogleHealthcareConsentStoreIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.consentStoreId"></a>

```csharp
public string ConsentStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#consent_store_id GoogleHealthcareConsentStoreIamBinding#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#dataset GoogleHealthcareConsentStoreIamBinding#dataset}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#members GoogleHealthcareConsentStoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#role GoogleHealthcareConsentStoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.condition"></a>

```csharp
public GoogleHealthcareConsentStoreIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#condition GoogleHealthcareConsentStoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_healthcare_consent_store_iam_binding#id GoogleHealthcareConsentStoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareConsentStoreIamBindingConditionOutputReference <a name="GoogleHealthcareConsentStoreIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareConsentStoreIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleHealthcareConsentStoreIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStoreIamBinding.GoogleHealthcareConsentStoreIamBindingCondition">GoogleHealthcareConsentStoreIamBindingCondition</a>

---



