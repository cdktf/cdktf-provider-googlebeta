# `googleIamWorkloadIdentityPoolNamespace` Submodule <a name="`googleIamWorkloadIdentityPoolNamespace` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolNamespace <a name="GoogleIamWorkloadIdentityPoolNamespace" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespace(Construct Scope, string Id, GoogleIamWorkloadIdentityPoolNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig">GoogleIamWorkloadIdentityPoolNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig">GoogleIamWorkloadIdentityPoolNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamWorkloadIdentityPoolNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkloadIdentityPoolNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService">OwnerService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput">WorkloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerService`<sup>Required</sup> <a name="OwnerService" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService"></a>

```csharp
public GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList OwnerService { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolNamespaceIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput"></a>

```csharp
public string WorkloadIdentityPoolNamespaceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolNamespaceConfig <a name="GoogleIamWorkloadIdentityPoolNamespaceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string WorkloadIdentityPoolNamespaceId,
    string Description = null,
    object Disabled = null,
    string Id = null,
    string Project = null,
    GoogleIamWorkloadIdentityPoolNamespaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description">Description</a></code> | <code>string</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; set; }
```

- *Type:* string

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}

---

### GoogleIamWorkloadIdentityPoolNamespaceOwnerService <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerService" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceOwnerService {

};
```


### GoogleIamWorkloadIdentityPoolNamespaceTimeouts <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get"></a>

```csharp
private GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject">PrincipalSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalSubject`<sup>Required</sup> <a name="PrincipalSubject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject"></a>

```csharp
public string PrincipalSubject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue"></a>

```csharp
public GoogleIamWorkloadIdentityPoolNamespaceOwnerService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a>

---


### GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



