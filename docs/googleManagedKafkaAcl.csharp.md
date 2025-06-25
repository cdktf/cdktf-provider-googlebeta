# `googleManagedKafkaAcl` Submodule <a name="`googleManagedKafkaAcl` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAcl <a name="GoogleManagedKafkaAcl" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl google_managed_kafka_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAcl(Construct Scope, string Id, GoogleManagedKafkaAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig">GoogleManagedKafkaAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig">GoogleManagedKafkaAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries">PutAclEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAclEntries` <a name="PutAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries"></a>

```csharp
private void PutAclEntries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleManagedKafkaAclTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleManagedKafkaAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleManagedKafkaAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleManagedKafkaAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleManagedKafkaAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleManagedKafkaAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleManagedKafkaAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries">AclEntries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput">AclEntriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput">AclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId">AclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries"></a>

```csharp
public GoogleManagedKafkaAclAclEntriesList AclEntries { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts"></a>

```csharp
public GoogleManagedKafkaAclTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a>

---

##### `AclEntriesInput`<sup>Optional</sup> <a name="AclEntriesInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput"></a>

```csharp
public object AclEntriesInput { get; }
```

- *Type:* object

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput"></a>

```csharp
public string AclIdInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId"></a>

```csharp
public string AclId { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclAclEntries <a name="GoogleManagedKafkaAclAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclAclEntries {
    string Operation,
    string Principal,
    string Host = null,
    string PermissionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation">Operation</a></code> | <code>string</code> | The operation type. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal">Principal</a></code> | <code>string</code> | The principal. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host">Host</a></code> | <code>string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType">PermissionType</a></code> | <code>string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#operation GoogleManagedKafkaAcl#operation}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

The principal.

Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#principal GoogleManagedKafkaAcl#principal}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#host GoogleManagedKafkaAcl#host}

---

##### `PermissionType`<sup>Optional</sup> <a name="PermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType"></a>

```csharp
public string PermissionType { get; set; }
```

- *Type:* string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#permission_type GoogleManagedKafkaAcl#permission_type}

---

### GoogleManagedKafkaAclConfig <a name="GoogleManagedKafkaAclConfig" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AclEntries,
    string AclId,
    string Cluster,
    string Location,
    string Id = null,
    string Project = null,
    GoogleManagedKafkaAclTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries">AclEntries</a></code> | <code>object</code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId">AclId</a></code> | <code>string</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster">Cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location">Location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries"></a>

```csharp
public object AclEntries { get; set; }
```

- *Type:* object

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#acl_entries GoogleManagedKafkaAcl#acl_entries}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId"></a>

```csharp
public string AclId { get; set; }
```

- *Type:* string

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#acl_id GoogleManagedKafkaAcl#acl_id}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#cluster GoogleManagedKafkaAcl#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#location GoogleManagedKafkaAcl#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts"></a>

```csharp
public GoogleManagedKafkaAclTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#timeouts GoogleManagedKafkaAcl#timeouts}

---

### GoogleManagedKafkaAclTimeouts <a name="GoogleManagedKafkaAclTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclAclEntriesList <a name="GoogleManagedKafkaAclAclEntriesList" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclAclEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get"></a>

```csharp
private GoogleManagedKafkaAclAclEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleManagedKafkaAclAclEntriesOutputReference <a name="GoogleManagedKafkaAclAclEntriesOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclAclEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType">ResetPermissionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPermissionType` <a name="ResetPermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType"></a>

```csharp
private void ResetPermissionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType">PermissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput"></a>

```csharp
public string PermissionTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType"></a>

```csharp
public string PermissionType { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleManagedKafkaAclTimeoutsOutputReference <a name="GoogleManagedKafkaAclTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleManagedKafkaAclTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



