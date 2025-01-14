# `googleIapWebBackendServiceIamBinding` Submodule <a name="`googleIapWebBackendServiceIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebBackendServiceIamBinding <a name="GoogleIapWebBackendServiceIamBinding" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding google_iap_web_backend_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

new googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding(scope: Construct, id: string, config: GoogleIapWebBackendServiceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig">GoogleIapWebBackendServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig">GoogleIapWebBackendServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleIapWebBackendServiceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapWebBackendServiceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIapWebBackendServiceIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapWebBackendServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapWebBackendServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapWebBackendServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference">GoogleIapWebBackendServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendServiceInput">webBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendService">webBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleIapWebBackendServiceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference">GoogleIapWebBackendServiceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `webBackendServiceInput`<sup>Optional</sup> <a name="webBackendServiceInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendServiceInput"></a>

```typescript
public readonly webBackendServiceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `webBackendService`<sup>Required</sup> <a name="webBackendService" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.webBackendService"></a>

```typescript
public readonly webBackendService: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebBackendServiceIamBindingCondition <a name="GoogleIapWebBackendServiceIamBindingCondition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.Initializer"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

const googleIapWebBackendServiceIamBindingCondition: googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#expression GoogleIapWebBackendServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#title GoogleIapWebBackendServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#description GoogleIapWebBackendServiceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#expression GoogleIapWebBackendServiceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#title GoogleIapWebBackendServiceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#description GoogleIapWebBackendServiceIamBinding#description}.

---

### GoogleIapWebBackendServiceIamBindingConfig <a name="GoogleIapWebBackendServiceIamBindingConfig" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.Initializer"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

const googleIapWebBackendServiceIamBindingConfig: googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#members GoogleIapWebBackendServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#role GoogleIapWebBackendServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.webBackendService">webBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#web_backend_service GoogleIapWebBackendServiceIamBinding#web_backend_service}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#id GoogleIapWebBackendServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#project GoogleIapWebBackendServiceIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#members GoogleIapWebBackendServiceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#role GoogleIapWebBackendServiceIamBinding#role}.

---

##### `webBackendService`<sup>Required</sup> <a name="webBackendService" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.webBackendService"></a>

```typescript
public readonly webBackendService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#web_backend_service GoogleIapWebBackendServiceIamBinding#web_backend_service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#condition GoogleIapWebBackendServiceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#id GoogleIapWebBackendServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_iap_web_backend_service_iam_binding#project GoogleIapWebBackendServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebBackendServiceIamBindingConditionOutputReference <a name="GoogleIapWebBackendServiceIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleIapWebBackendServiceIamBinding } from '@cdktf/provider-google-beta'

new googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapWebBackendServiceIamBinding.GoogleIapWebBackendServiceIamBindingCondition">GoogleIapWebBackendServiceIamBindingCondition</a>

---



