# `googleComputeOrganizationSecurityPolicyAssociation` Submodule <a name="`googleComputeOrganizationSecurityPolicyAssociation` Submodule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicyAssociation <a name="GoogleComputeOrganizationSecurityPolicyAssociation" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association google_compute_organization_security_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

new googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig">GoogleComputeOrganizationSecurityPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig">GoogleComputeOrganizationSecurityPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeOrganizationSecurityPolicyAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeOrganizationSecurityPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput">attachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentIdInput`<sup>Optional</sup> <a name="attachmentIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput"></a>

```typescript
public readonly attachmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeOrganizationSecurityPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyAssociationConfig <a name="GoogleComputeOrganizationSecurityPolicyAssociationConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.Initializer"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

const googleComputeOrganizationSecurityPolicyAssociationConfig: googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId">attachmentId</a></code> | <code>string</code> | The resource that the security policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.name">name</a></code> | <code>string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.policyId">policyId</a></code> | <code>string</code> | The security policy ID of the association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#id GoogleComputeOrganizationSecurityPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

The resource that the security policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#attachment_id GoogleComputeOrganizationSecurityPolicyAssociation#attachment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#name GoogleComputeOrganizationSecurityPolicyAssociation#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The security policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#policy_id GoogleComputeOrganizationSecurityPolicyAssociation#policy_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#id GoogleComputeOrganizationSecurityPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeOrganizationSecurityPolicyAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#timeouts GoogleComputeOrganizationSecurityPolicyAssociation#timeouts}

---

### GoogleComputeOrganizationSecurityPolicyAssociationTimeouts <a name="GoogleComputeOrganizationSecurityPolicyAssociationTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.Initializer"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

const googleComputeOrganizationSecurityPolicyAssociationTimeouts: googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#create GoogleComputeOrganizationSecurityPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#delete GoogleComputeOrganizationSecurityPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#create GoogleComputeOrganizationSecurityPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_organization_security_policy_association#delete GoogleComputeOrganizationSecurityPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeOrganizationSecurityPolicyAssociation } from '@cdktf/provider-google-beta'

new googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeOrganizationSecurityPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyAssociation.GoogleComputeOrganizationSecurityPolicyAssociationTimeouts">GoogleComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---



