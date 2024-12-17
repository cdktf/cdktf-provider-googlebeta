# `googleSccV2OrganizationSourceIamBinding` Submodule <a name="`googleSccV2OrganizationSourceIamBinding` Submodule" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccV2OrganizationSourceIamBinding <a name="GoogleSccV2OrganizationSourceIamBinding" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding google_scc_v2_organization_source_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

new googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding(scope: Construct, id: string, config: GoogleSccV2OrganizationSourceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig">GoogleSccV2OrganizationSourceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig">GoogleSccV2OrganizationSourceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleSccV2OrganizationSourceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccV2OrganizationSourceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isConstruct"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformElement"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformResource"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSccV2OrganizationSourceIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccV2OrganizationSourceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccV2OrganizationSourceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccV2OrganizationSourceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference">GoogleSccV2OrganizationSourceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleSccV2OrganizationSourceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference">GoogleSccV2OrganizationSourceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleSccV2OrganizationSourceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccV2OrganizationSourceIamBindingCondition <a name="GoogleSccV2OrganizationSourceIamBindingCondition" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.Initializer"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

const googleSccV2OrganizationSourceIamBindingCondition: googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#expression GoogleSccV2OrganizationSourceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#title GoogleSccV2OrganizationSourceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#description GoogleSccV2OrganizationSourceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#expression GoogleSccV2OrganizationSourceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#title GoogleSccV2OrganizationSourceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#description GoogleSccV2OrganizationSourceIamBinding#description}.

---

### GoogleSccV2OrganizationSourceIamBindingConfig <a name="GoogleSccV2OrganizationSourceIamBindingConfig" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.Initializer"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

const googleSccV2OrganizationSourceIamBindingConfig: googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#members GoogleSccV2OrganizationSourceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#organization GoogleSccV2OrganizationSourceIamBinding#organization}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#role GoogleSccV2OrganizationSourceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#source GoogleSccV2OrganizationSourceIamBinding#source}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#id GoogleSccV2OrganizationSourceIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#members GoogleSccV2OrganizationSourceIamBinding#members}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#organization GoogleSccV2OrganizationSourceIamBinding#organization}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#role GoogleSccV2OrganizationSourceIamBinding#role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#source GoogleSccV2OrganizationSourceIamBinding#source}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleSccV2OrganizationSourceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#condition GoogleSccV2OrganizationSourceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_scc_v2_organization_source_iam_binding#id GoogleSccV2OrganizationSourceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccV2OrganizationSourceIamBindingConditionOutputReference <a name="GoogleSccV2OrganizationSourceIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleSccV2OrganizationSourceIamBinding } from '@cdktf/provider-google-beta'

new googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSccV2OrganizationSourceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccV2OrganizationSourceIamBinding.GoogleSccV2OrganizationSourceIamBindingCondition">GoogleSccV2OrganizationSourceIamBindingCondition</a>

---



