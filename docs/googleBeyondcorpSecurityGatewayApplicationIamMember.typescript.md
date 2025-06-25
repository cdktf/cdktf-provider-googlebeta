# `googleBeyondcorpSecurityGatewayApplicationIamMember` Submodule <a name="`googleBeyondcorpSecurityGatewayApplicationIamMember` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMember <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMember" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member google_beyondcorp_security_gateway_application_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

new googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember(scope: Construct, id: string, config: GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplicationIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBeyondcorpSecurityGatewayApplicationIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplicationIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput"></a>

```typescript
public readonly securityGatewayIdInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.Initializer"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

const googleBeyondcorpSecurityGatewayApplicationIamMemberCondition: googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#expression GoogleBeyondcorpSecurityGatewayApplicationIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#title GoogleBeyondcorpSecurityGatewayApplicationIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#description GoogleBeyondcorpSecurityGatewayApplicationIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#expression GoogleBeyondcorpSecurityGatewayApplicationIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#title GoogleBeyondcorpSecurityGatewayApplicationIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#description GoogleBeyondcorpSecurityGatewayApplicationIamMember#description}.

---

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.Initializer"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

const googleBeyondcorpSecurityGatewayApplicationIamMemberConfig: googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#condition GoogleBeyondcorpSecurityGatewayApplicationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleBeyondcorpSecurityGatewayApplicationIamMember } from '@cdktf/provider-google-beta'

new googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---



