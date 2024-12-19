# `googleGkeHubMembership` Submodule <a name="`googleGkeHubMembership` Submodule" id="@cdktf/provider-google-beta.googleGkeHubMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembership <a name="GoogleGkeHubMembership" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership google_gke_hub_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

new googleGkeHubMembership.GoogleGkeHubMembership(scope: Construct, id: string, config: GoogleGkeHubMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig">GoogleGkeHubMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig">GoogleGkeHubMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority">putAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthority` <a name="putAuthority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority"></a>

```typescript
public putAuthority(value: GoogleGkeHubMembershipAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint"></a>

```typescript
public putEndpoint(value: GoogleGkeHubMembershipEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeHubMembershipTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

---

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetAuthority"></a>

```typescript
public resetAuthority(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

googleGkeHubMembership.GoogleGkeHubMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeHubMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference">GoogleGkeHubMembershipAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference">GoogleGkeHubMembershipEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference">GoogleGkeHubMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authorityInput">authorityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipIdInput">membershipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipId">membershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authority"></a>

```typescript
public readonly authority: GoogleGkeHubMembershipAuthorityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference">GoogleGkeHubMembershipAuthorityOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleGkeHubMembershipEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference">GoogleGkeHubMembershipEndpointOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubMembershipTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference">GoogleGkeHubMembershipTimeoutsOutputReference</a>

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.authorityInput"></a>

```typescript
public readonly authorityInput: GoogleGkeHubMembershipAuthority;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.endpointInput"></a>

```typescript
public readonly endpointInput: GoogleGkeHubMembershipEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipIdInput"></a>

```typescript
public readonly membershipIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeHubMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipAuthority <a name="GoogleGkeHubMembershipAuthority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

const googleGkeHubMembershipAuthority: googleGkeHubMembership.GoogleGkeHubMembershipAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.property.issuer">issuer</a></code> | <code>string</code> | A JSON Web Token (JWT) issuer URI. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

A JSON Web Token (JWT) issuer URI.

'issuer' must start with 'https://' and // be a valid
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster'. If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#issuer GoogleGkeHubMembership#issuer}

---

### GoogleGkeHubMembershipConfig <a name="GoogleGkeHubMembershipConfig" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

const googleGkeHubMembershipConfig: googleGkeHubMembership.GoogleGkeHubMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.membershipId">membershipId</a></code> | <code>string</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.description">description</a></code> | <code>string</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.location">location</a></code> | <code>string</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#membership_id GoogleGkeHubMembership#membership_id}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.authority"></a>

```typescript
public readonly authority: GoogleGkeHubMembershipAuthority;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#authority GoogleGkeHubMembership#authority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The name of this entity type to be displayed on the console.

This field is unavailable in v1 of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#description GoogleGkeHubMembership#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleGkeHubMembershipEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#endpoint GoogleGkeHubMembership#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#id GoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this membership.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#labels GoogleGkeHubMembership#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#location GoogleGkeHubMembership#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#project GoogleGkeHubMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeHubMembershipTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#timeouts GoogleGkeHubMembership#timeouts}

---

### GoogleGkeHubMembershipEndpoint <a name="GoogleGkeHubMembershipEndpoint" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

const googleGkeHubMembershipEndpoint: googleGkeHubMembership.GoogleGkeHubMembershipEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.property.gkeCluster">gkeCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | gke_cluster block. |

---

##### `gkeCluster`<sup>Optional</sup> <a name="gkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint.property.gkeCluster"></a>

```typescript
public readonly gkeCluster: GoogleGkeHubMembershipEndpointGkeCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

gke_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#gke_cluster GoogleGkeHubMembership#gke_cluster}

---

### GoogleGkeHubMembershipEndpointGkeCluster <a name="GoogleGkeHubMembershipEndpointGkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

const googleGkeHubMembershipEndpointGkeCluster: googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.property.resourceLink">resourceLink</a></code> | <code>string</code> | Self-link of the GCP resource for the GKE cluster. |

---

##### `resourceLink`<sup>Required</sup> <a name="resourceLink" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster.property.resourceLink"></a>

```typescript
public readonly resourceLink: string;
```

- *Type:* string

Self-link of the GCP resource for the GKE cluster.

For example: '//container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#resource_link GoogleGkeHubMembership#resource_link}

---

### GoogleGkeHubMembershipTimeouts <a name="GoogleGkeHubMembershipTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

const googleGkeHubMembershipTimeouts: googleGkeHubMembership.GoogleGkeHubMembershipTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#create GoogleGkeHubMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#update GoogleGkeHubMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#create GoogleGkeHubMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_membership#update GoogleGkeHubMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipAuthorityOutputReference <a name="GoogleGkeHubMembershipAuthorityOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

new googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubMembershipAuthority;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipAuthority">GoogleGkeHubMembershipAuthority</a>

---


### GoogleGkeHubMembershipEndpointGkeClusterOutputReference <a name="GoogleGkeHubMembershipEndpointGkeClusterOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

new googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLinkInput">resourceLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink">resourceLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceLinkInput`<sup>Optional</sup> <a name="resourceLinkInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLinkInput"></a>

```typescript
public readonly resourceLinkInput: string;
```

- *Type:* string

---

##### `resourceLink`<sup>Required</sup> <a name="resourceLink" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink"></a>

```typescript
public readonly resourceLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubMembershipEndpointGkeCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

---


### GoogleGkeHubMembershipEndpointOutputReference <a name="GoogleGkeHubMembershipEndpointOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

new googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster">putGkeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resetGkeCluster">resetGkeCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeCluster` <a name="putGkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster"></a>

```typescript
public putGkeCluster(value: GoogleGkeHubMembershipEndpointGkeCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.putGkeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

---

##### `resetGkeCluster` <a name="resetGkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.resetGkeCluster"></a>

```typescript
public resetGkeCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster">gkeCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference">GoogleGkeHubMembershipEndpointGkeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeClusterInput">gkeClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster"></a>

```typescript
public readonly gkeCluster: GoogleGkeHubMembershipEndpointGkeClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeClusterOutputReference">GoogleGkeHubMembershipEndpointGkeClusterOutputReference</a>

---

##### `gkeClusterInput`<sup>Optional</sup> <a name="gkeClusterInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.gkeClusterInput"></a>

```typescript
public readonly gkeClusterInput: GoogleGkeHubMembershipEndpointGkeCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointGkeCluster">GoogleGkeHubMembershipEndpointGkeCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeHubMembershipEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipEndpoint">GoogleGkeHubMembershipEndpoint</a>

---


### GoogleGkeHubMembershipTimeoutsOutputReference <a name="GoogleGkeHubMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeHubMembership } from '@cdktf/provider-google-beta'

new googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeHubMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeHubMembership.GoogleGkeHubMembershipTimeouts">GoogleGkeHubMembershipTimeouts</a>

---



