# `googleDataCatalogPolicyTagIamBinding` Submodule <a name="`googleDataCatalogPolicyTagIamBinding` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogPolicyTagIamBinding <a name="GoogleDataCatalogPolicyTagIamBinding" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding google_data_catalog_policy_tag_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

new googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding(scope: Construct, id: string, config: GoogleDataCatalogPolicyTagIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig">GoogleDataCatalogPolicyTagIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig">GoogleDataCatalogPolicyTagIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleDataCatalogPolicyTagIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogPolicyTagIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isConstruct"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformElement"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformResource"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataCatalogPolicyTagIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataCatalogPolicyTagIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataCatalogPolicyTagIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogPolicyTagIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference">GoogleDataCatalogPolicyTagIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.policyTagInput">policyTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.policyTag">policyTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleDataCatalogPolicyTagIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference">GoogleDataCatalogPolicyTagIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataCatalogPolicyTagIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `policyTagInput`<sup>Optional</sup> <a name="policyTagInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.policyTagInput"></a>

```typescript
public readonly policyTagInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.policyTag"></a>

```typescript
public readonly policyTag: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogPolicyTagIamBindingCondition <a name="GoogleDataCatalogPolicyTagIamBindingCondition" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

const googleDataCatalogPolicyTagIamBindingCondition: googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#expression GoogleDataCatalogPolicyTagIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#title GoogleDataCatalogPolicyTagIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#description GoogleDataCatalogPolicyTagIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#expression GoogleDataCatalogPolicyTagIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#title GoogleDataCatalogPolicyTagIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#description GoogleDataCatalogPolicyTagIamBinding#description}.

---

### GoogleDataCatalogPolicyTagIamBindingConfig <a name="GoogleDataCatalogPolicyTagIamBindingConfig" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

const googleDataCatalogPolicyTagIamBindingConfig: googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#members GoogleDataCatalogPolicyTagIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.policyTag">policyTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#policy_tag GoogleDataCatalogPolicyTagIamBinding#policy_tag}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#role GoogleDataCatalogPolicyTagIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#id GoogleDataCatalogPolicyTagIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#members GoogleDataCatalogPolicyTagIamBinding#members}.

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.policyTag"></a>

```typescript
public readonly policyTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#policy_tag GoogleDataCatalogPolicyTagIamBinding#policy_tag}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#role GoogleDataCatalogPolicyTagIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataCatalogPolicyTagIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#condition GoogleDataCatalogPolicyTagIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_policy_tag_iam_binding#id GoogleDataCatalogPolicyTagIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogPolicyTagIamBindingConditionOutputReference <a name="GoogleDataCatalogPolicyTagIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleDataCatalogPolicyTagIamBinding } from '@cdktf/provider-google-beta'

new googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataCatalogPolicyTagIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTagIamBinding.GoogleDataCatalogPolicyTagIamBindingCondition">GoogleDataCatalogPolicyTagIamBindingCondition</a>

---



